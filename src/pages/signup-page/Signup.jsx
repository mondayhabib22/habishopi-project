import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="bg-grey-500 min-h-screen flex items-center justify-center p-6">
        <title>Signup</title>
         <div className="w-full max-w-md">
      <div className="w-full p-8 bg-white rounded shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Signup Page
        </h3>
        <form
          action="/signup"
          method="POST"
          className="flex flex-col gap-4 max-w-sm mx-auto mt-10 w-full"
        >
          <div className="w-full">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password:
            </label>
            <input type="password" id="password" name="password" required className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="w-full">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-300"
          >
            Signup
          </button>
        </form>
      </div>
      <Link to="/login" className="text-center mt-4">
        Already have an account?{" "}
        <a className="text-blue-500 hover:underline">
          Login here
        </a>
      </Link>
      </div>
    </div>
  );
};

export default Signup;
