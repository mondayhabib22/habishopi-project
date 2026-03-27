import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  const [phone, setPhone] = useState([]);
  const [appliances, setAppliances] = useState([]);
  const [fashions, setFashions] = useState([]);

  useEffect(() => {
    const fetchPhones = async () => {
      let response = await axios.get("http://localhost:3001/products");
      setPhone(response.data);

      response = await axios.get("http://localhost:3001/appliances");
      setAppliances(response.data);

      response = await axios.get("http://localhost:3001/fashions");
      setFashions(response.data);
    };

    fetchPhones();
  }, []);

  return (
    <div>
      <title>Home</title>
      <Header />
      <div className="flex items-center justify-between h-screen bg-gray-800 text-white p-8 mt-20 rounded">
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl font-bold">
            <span className="text-yellow-500">Get Ready to Shop</span> Till You
            Drop!
          </h1>
          <p className="text-lg">
            Discover the best deals and latest trends at HabiShopi. Your
            one-stop destination for all your shopping needs. Start exploring
            now!
          </p>
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore Deals
          </button>
        </div>

        <div>
          <img
            src="images/hero-image.png"
            alt="Shopping"
            className="w-96 rounded"
          />
        </div>
      </div>
      <div className="mx-auto px-4 text-white mb-8">
        <div className="shadow-2xl rounded mt-8">
          <div className="flex items-center justify-between bg-gray-700 p-4 rounded">
            <span className="font-bold">Phones</span>
            <span className="font-bold">See All&gt;</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {phone.map((item) => (
              <div
                key={item.id}
                className="p-4 m-2 rounded text-black hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.spec}
                  className="w-full object-cover rounded"
                />
                <h3 className="text-sm text-gray-600">{item.spec}</h3>
                <p className="text-lg font-semibold">₦ {item.price}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="shadow-2xl rounded mt-8">
          <div className="flex items-center justify-between bg-gray-700 p-4 rounded">
            <span className="font-bold">Appliances</span>
            <span className="font-bold">See All&gt;</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {appliances.map((item) => (
              <div
                key={item.id}
                className="p-4 m-2 rounded text-black hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.spec}
                  className="w-full object-cover rounded"
                />
                <h3 className="text-sm text-gray-600">{item.spec}</h3>
                <p className="text-lg font-semibold">₦ {item.price}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="shadow-2xl rounded mt-8">
          <div className="flex items-center justify-between bg-gray-700 p-4 rounded">
            <span className="font-bold">Phones</span>
            <span className="font-bold">See All&gt;</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {fashions.map((item) => (
              <div
                key={item.id}
                className="p-4 m-2 rounded text-black hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.spec}
                  className="w-full object-cover rounded"
                />
                <h3 className="text-sm text-gray-600">{item.spec}</h3>
                <p className="text-lg font-semibold">₦ {item.price}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
