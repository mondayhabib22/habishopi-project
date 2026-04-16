import { useEffect, useState, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "./Hero";

function Home() {
  const [phone, setPhone] = useState([]);
  const [appliances, setAppliances] = useState([]);
  const [fashions, setFashions] = useState([]);

  const products = { phones: phone, appliances, fashions };
  const gridRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/products");
        setPhone(data.phones);
        setAppliances(data.appliances);
        setFashions(data.fashions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", hoverIn);
        card.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, [phone, appliances, fashions]);

  return (
    <div>
      <title>Home</title>
      <Header />
      <Hero />
      <div ref={gridRef} className="mx-auto px-4 text-white mb-8">
        {Object.entries(products).map(([key, value]) => {
          return (
            <div className="shadow-2xl rounded mt-8" key={key}>
              <div className="flex items-center justify-between bg-gray-700 p-4 rounded">
                <span className="font-bold">{key}</span>
                <Link to={`/products?category=${key}`} className="font-bold">
                  See All&gt;
                </Link>
              </div>

              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={16}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                className="p-4"
              >
                {value.slice(0, 6).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="product-card p-2 sm:p-3 m-1 rounded text-black hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.spec}
                        className="w-full object-cover rounded"
                      />
                      <h3 className="text-sm text-gray-600">{item.spec}</h3>
                      <p className="text-lg font-semibold">
                        ₦ {item.price.toLocaleString()}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
