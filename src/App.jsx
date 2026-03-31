import { Route, Routes } from "react-router";
import Home from "./pages/home-page/Home";
import Login from "./pages/login-page/Login";
import Orders from "./pages/orders-page/Orders";
import Cart from "./pages/cart-page/Cart";
import Phones from "./pages/phones-page/Phones";
import Appliances from "./pages/appliances-page/Appliances";
import Fashions from "./pages/fashions-page/Fashions";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="orders" element={<Orders />} />
      <Route path="cart" element={<Cart />} />
      <Route path="phones" element={<Phones />} />
      <Route path="appliances" element={<Appliances />} />
      <Route path="fashions" element={<Fashions />} />
    </Routes>
  );
};

export default App;
