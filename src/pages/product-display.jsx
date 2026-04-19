import axios from "axios";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const ProductDispay = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const [products, setProducts] = useState([]);
  const gridRef = useRef(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!category && !search) return;

    let url = `http://localhost:3001/products`;
    const fetchProducts = async () => {
      let response = await axios.get(url);

      if (search) {
        // Search across all products
        const allProducts = Object.values(response.data).flat();
        const filtered = allProducts.filter(
          (item) =>
            item.spec.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase()),
        );
        setProducts(filtered);
      } else if (category) {
        // Filter by category
        setProducts(response.data[category]);
      }
    };
    fetchProducts();
  }, [category, search]);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".product-card");
    if (!cards || cards.length === 0) return;

    gsap.set(cards, { transformOrigin: "50% 50%" });
    const hoverIn = (event) =>
      gsap.to(event.currentTarget, {
        scale: 1.08,
        duration: 0.25,
        ease: "power2.out",
      });
    const hoverOut = (event) =>
      gsap.to(event.currentTarget, {
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
      });

    cards.forEach((card) => {
      card.addEventListener("mouseenter", hoverIn);
      card.addEventListener("mouseleave", hoverOut);
    });

    gsap.from(cards, {
      duration: 0.45,
      opacity: 0,
      y: 20,
      stagger: 0.06,
      ease: "power2.out",
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", hoverIn);
        card.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, [products]);

  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center py-4 mt-20">
        {search
          ? `Search Results for "${search}"`
          : category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      {products.length === 0 && (
        <h2 className="text-center text-gray-500 py-8">No products found</h2>
      )}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-15"
      >
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/details/${item.category}/${item.id}`}
            className="product-card group p-4 m-2 rounded text-black hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={`/${item.image}`}
              alt={item.spec}
              className="w-full object-cover rounded"
            />
            <h3 className="text-sm text-gray-600">{item.spec}</h3>
            <p className="text-lg font-semibold">
              ₦ {item.price.toLocaleString()}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(item);
                navigate("/cart");
              }}
              className="w-full mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto cursor-pointer"
            >
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDispay;
