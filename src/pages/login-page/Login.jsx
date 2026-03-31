import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "../../components/Header";

function Login() {
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
      <title>Login</title>
      <Header />
    </div>
  );
}

export default Login;
