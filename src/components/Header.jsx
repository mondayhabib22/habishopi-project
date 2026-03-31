import { Link } from "react-router";

const Header = () => {
  return (
    <div className="text-lg font-bold flex items-center justify-between p-4 bg-gray-800 text-white fixed w-full top-0 z-10 shadow">
      <Link to="/" className="text-3xl">
        HabiShopi
      </Link>

      <div className="flex items-center flex-1 max-w-md rounded">
        <input
          type="search"
          placeholder="Search products..."
          className="flex-1 bg-gray-700 text-white rounded px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
      </div>

      <div className="flex space-x-4">
        <Link
          to="/login"
          className="text-xl hover:text-blue-600 cursor-pointer py-1 px-4 rounded"
        >
          Login/Signup
        </Link>
        <Link
          to="/orders"
          className="text-xl hover:text-blue-600 cursor-pointer py-1 px-4 rounded"
        >
          Orders
        </Link>
        <Link
          to="/cart"
          className="text-xl flex py-1 px-4 rounded text-white hover:text-blue-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
