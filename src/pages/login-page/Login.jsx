import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router";
import Input from "../../components/Input";

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
    <div
      ref={containerRef}
      className="bg-grey-500 min-h-screen flex items-center justify-center p-6"
    >
      <title>Login</title>
      <div className="w-full max-w-md p-8">
        <form className="bg-white p-6 rounded shadow-md max-w-sm mx-auto mt-10 w-full flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Login Here
          </h3>

          <label htmlFor="email">Email:</label>
          <Input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <Input type="password" id="password" name="password" />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-300"
          >
            Login
          </button>
          <span>
            Forgot your password?{" "}
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Click here
            </a>
          </span>
        </form>
        <span className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
