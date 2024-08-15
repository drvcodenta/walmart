import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../src/components/Navbar";
import { Login } from "../src/components/Login";
import { Cart } from "../src/components/Cart";
import { Profile } from "../src/components/Profile";
import { Order } from "../src/components/Order";
import { Nav } from "../src/components/Nav";
import { Return } from "./components/Return ";
import { AuthProvider } from "./utils/AuthContext"; 
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="order" element={<ProtectedRoute element={<Order />} />} />
          <Route path="profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route path="return" element={<ProtectedRoute element={<Return />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
