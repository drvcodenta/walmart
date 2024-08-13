// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import logo from "../images/logo.png";
// import cart from "../images/cart.png";

// export const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-links">
//         <Link to="/" className="img hover-effect">
//           <img src={logo} alt="Logo" className="logo" />
//         </Link>
//         <div className="first hover-effect">
//           <p>How do you want your items?</p>
//         </div>
//         <div className="search">
//           <p>Search everything at Walmart online and in store</p>
//         </div>

//         <li>
//           <Link to="/order">
//             <p className="hover-effect order">My Orders</p>
//           </Link>
//         </li>
//         <li>
//           <Link to="/login" className="hover-effect">
//             Sign In Account
//           </Link>
//         </li>
//         <li>
//           <Link style={{ textDecoration: "none" }} to="/cart">
//             <img src={cart} alt="" className="cart" />
//           </Link>
//           <div className="nav-cart-count">0</div>
//         </li>
//         <li>
//           <Link to="/profile" className="hover-effect">
//             Profile
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import profileIcon from "../images/profile.webp"; // Assuming you have a profile icon
import { FaSearch } from "react-icons/fa";
import location from "../images/img1.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="img hover-effect">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </li>
        <li className="first hover-effect">
          <img src={location} className="location" />
          <p>How do you want your items?</p>
        </li>
        <li className="search">
          <p>Search everything at Walmart online and in store</p>
          <div className="searchIcon">
            <FaSearch className="icon" />
          </div>
        </li>
        <li>
          <Link to="/order" className="hover-effect order">
            <p>My Orders</p>
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover-effect">
            Sign In Account
          </Link>
        </li>
        <li className="cart-wrapper">
          <Link to="/cart" className="hover-effect">
            <img src={cart} alt="Cart" className="cart" />
          </Link>
          <div className="nav-cart-count">0</div>
        </li>
        <li>
          <Link to="/profile" className="hover-effect profile-link">
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="profile-icon"
            />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};
