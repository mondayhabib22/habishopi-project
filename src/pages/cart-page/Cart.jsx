import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../contexts/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        duration: 0.6,
        opacity: 0,
        y: 20,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div ref={containerRef}>
      <Header />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow flex justify-between items-center gap-4"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          item.image
                            ? item.image.startsWith("/")
                              ? item.image
                              : `/${item.image}`
                            : "/hero-image.png"
                        }
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 cursor-pointer text-sm font-semibold"
                      >
                        Remove
                      </button>
                      <div className="inline-flex items-center rounded-full overflow-hidden">
                        <button
                          onClick={() =>
                            updateCartItemQuantity(item.id, item.quantity - 1)
                          }
                          className="px-3 py-1 bg-gray-300 text-gray-700 hover:bg-gray-200 transition"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 text-sm font-medium bg-white text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateCartItemQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-bold">
                      ₦ {item.price?.toLocaleString()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
