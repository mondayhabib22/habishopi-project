import { useEffect, useState, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import Footer from "../../components/Footer";

const Fashions = () => {
  const [fashion, setFashion] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    const fetchFashions = async () => {
      const response = await axios.get("http://localhost:3001/fashions");
      setFashion(response.data);
    };
    fetchFashions();
  }, []);

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
  }, [fashion]);

  return (
    <div>
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
      >
        {fashion.map((item) => (
          <div
            key={item.id}
            className="product-card p-4 m-2 rounded text-black hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.spec}
              className="w-full object-cover rounded"
            />
            <h3 className="text-sm text-gray-600">{item.spec}</h3>
            <p className="text-lg font-semibold">₦ {item.price}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Fashions;
