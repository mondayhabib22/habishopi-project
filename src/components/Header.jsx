import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0,
  );

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-4 sm:p-5 w-full">
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-extrabold text-white hover:text-cyan-300 transition cursor-pointer mr-4"
          >
            HabiShopi
          </Link>

          <div className="lg:hidden flex items-center gap-4 text-white">
            <Link
              to="/login"
              className="hover:text-cyan-300 transition cursor-pointer flex items-center"
            >
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-white"
              >
                <circle
                  cx="40"
                  cy="35"
                  r="10"
                  stroke="white"
                  stroke-width="4"
                />

                <path
                  d="M20 75c0-12 10-20 20-20s20 8 20 20"
                  stroke="white"
                  stroke-width="4"
                  fill="none"
                />
              </svg>
            </Link>
            <Link
              to="/orders"
              className="hover:text-cyan-300 transition cursor-pointer text-sm"
            >
              Orders
            </Link>
            <Link
              to="/cart"
              className="hover:text-cyan-300 flex items-center gap-1 transition cursor-pointer text-sm relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1.5 text-[0.65rem] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
            <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden flex-1">
              <input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-gray-800 text-white px-4 py-2 focus:outline-none flex-1"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 cursor-pointer transition"
              >
                Search
              </button>
            </div>

            <nav className="flex items-center gap-6 text-white">
              <Link
                to="/login"
                className="hover:text-cyan-300 transition cursor-pointer flex items-center"
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-white"
                >
                  <circle
                    cx="40"
                    cy="35"
                    r="10"
                    stroke="white"
                    stroke-width="4"
                  />

                  <path
                    d="M20 75c0-12 10-20 20-20s20 8 20 20"
                    stroke="white"
                    stroke-width="4"
                    fill="none"
                  />
                </svg>
                Login
              </Link>
              <Link
                to="/orders"
                className="hover:text-cyan-300 transition cursor-pointer"
              >
                Orders
              </Link>
              <Link
                to="/cart"
                className="hover:text-cyan-300 flex items-center gap-2 transition cursor-pointer relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
                Cart
                {cartCount > 0 && (
                  <span className="absolute -right-3 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1.5 text-[0.65rem] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        </div>

        <div className="lg:hidden px-4 pb-3 space-y-2">
          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden w-full">
            <input
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-gray-800 text-white px-4 py-2 focus:outline-none flex-1"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 cursor-pointer transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
