import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:3001/cart");
      const cartData = response.data;

      const hasMissingImages = cartData.some((item) => !item.image);
      if (hasMissingImages) {
        const productsResponse = await axios.get(
          "http://localhost:3001/products",
        );
        const allProducts = Object.values(productsResponse.data).flat();

        const enrichedCart = cartData.map((item) => {
          if (item.image) return item;
          const product = allProducts.find(
            (productItem) => productItem.id === item.productId,
          );
          return product
            ? {
                ...item,
                image: product.image,
                name: item.name || product.spec,
                price: item.price || product.price,
              }
            : item;
        });

        setCartItems(enrichedCart);
      } else {
        setCartItems(cartData);
      }
    } catch (error) {
      console.error("Error fetching cart", error);
    }
  };

  useEffect(() => {
    const loadCart = async () => {
      await fetchCart();
    };
    loadCart();
  }, []);

  const addToCart = async (product) => {
    try {
      const existingResponse = await axios.get(
        `http://localhost:3001/cart?productId=${product.id}`,
      );

      if (existingResponse.data.length > 0) {
        const existingItem = existingResponse.data[0];
        await axios.patch(`http://localhost:3001/cart/${existingItem.id}`, {
          quantity: existingItem.quantity + 1,
        });
      } else {
        await axios.post("http://localhost:3001/cart", {
          productId: product.id,
          quantity: 1,
          name: product.spec,
          price: product.price,
          image: product.image,
        });
      }

      await fetchCart();
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${cartItemId}`);
      await fetchCart();
    } catch (error) {
      console.error("Error removing from cart", error);
    }
  };

  const updateCartItemQuantity = async (cartItemId, quantity) => {
    try {
      if (quantity <= 0) {
        await axios.delete(`http://localhost:3001/cart/${cartItemId}`);
      } else {
        await axios.patch(`http://localhost:3001/cart/${cartItemId}`, {
          quantity,
        });
      }
      await fetchCart();
    } catch (error) {
      console.error("Error updating cart quantity", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
