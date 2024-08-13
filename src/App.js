import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/components/Home";
import { Navbar } from "../src/components/Navbar";
import { Login } from "../src/components/Login";
import { Cart } from "../src/components/Cart";
import { Profile } from "../src/components/Profile";
import { Order } from "../src/components/Order";
import { Nav } from "../src/components/Nav";
import { Return } from "./components/Return ";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="order" element={<Order />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="return" element={<Return />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
