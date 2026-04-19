import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
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

    const addToCart = async (product) => {
      try {
        const response = await axios.post("http://localhost:3001/cart", {
          productId: product.id,
          quantity: 1,
        });
        setCartItems(response.data);
      } catch (error) {
       setCartItems("Error fetching cart items"); 
      }
    }
    fetchCarttems();
  }, []);

  return (
    <div ref={containerRef}>
      <title>Cart</title>
      <Header />

      <Footer />
    </div>
  );
}

export default Cart;
