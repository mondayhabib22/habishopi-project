import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Cart() {
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
      <title>Cart</title>
      <Header />

      <Footer />
    </div>
  );
}

export default Cart;
