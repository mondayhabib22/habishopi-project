import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../contexts/CartContext";

const Details = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/products");
      const categoryProducts = response.data[category];
      const allProducts = categoryProducts
        ? categoryProducts
        : Object.values(response.data).flat();
      const foundProduct = allProducts.find((item) => item.id === Number(id));
      setProduct(foundProduct);
    };
    fetchData();
  }, [category, id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-6 mt-15 md:mt-15">
        <Link
          to={`/products?category=${category}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to {category}
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <div className="md:flex h-full">
            <div className="md:w-1/2">
              <img
                src={`/${product.image}`}
                alt={product.spec}
                className="w-full h-64 md:h-80 object-contain"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.spec}
                </h1>
                <p className="text-xl font-bold text-green-600 mb-4">
                  ₦ {product.price.toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => {
                  addToCart(product);
                  navigate("/cart");
                }}
                className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
          <div className="">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Product details
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            <div className="mb-6"></div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Full Specifications
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {product.fullSpecs &&
                Object.entries(product.fullSpecs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-1 border-b border-gray-200 text-sm"
                  >
                    <span className="font-medium text-gray-600">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
