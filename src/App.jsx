import { Route, Routes } from "react-router-dom";
import Home from "./pages/home-page/Home";
import Login from "./pages/login-page/Login";
import Orders from "./pages/orders-page/Orders";
import Cart from "./pages/cart-page/Cart";
import Signup from "./pages/signup-page/Signup";
import ProductDispay from "./pages/product-display";
import Details from "./pages/details-page/Details";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="orders" element={<Orders />} />
      <Route path="cart" element={<Cart />} />
      <Route path="products" element={<ProductDispay />} />
      <Route path="details/:category/:id" element={<Details />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
