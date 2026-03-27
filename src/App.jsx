import { Route, Routes } from "react-router";
import Home from "./pages/home-page/Home";
import Login from "./pages/login-pages/Login";
import Orders from "./pages/orders-pages/Orders";
import Cart from "./pages/cart-pages/Cart";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="orders" element={<Orders />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
