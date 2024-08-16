import React from "react";
import { FaCaretDown } from "react-icons/fa";
import laptop from "../images/laptop.jpg";
import "./Order.css";
import { useNavigate } from "react-router-dom";
import mug from "../images/mug.jpg";

export const Order = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate("/return"); // Navigate to the return page
  };

  return (
    <div className="container">
      <h1>My Orders</h1>
      <button className="btn-time">
        Last 6 months <FaCaretDown className="arrow-icon" />
      </button>

      <div className="orderr">
        <div className="orders">
          <img src={mug} />
          <p>Mug ₹299</p>
        </div>
        <div className="delivery">
          <h2>Delivered</h2>
          <p>Deliverd on Sat,11 Aug</p>
          <div className="rate">
            <p>Rate this Product</p>
            <div className="stars">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
          </div>
          <button className="return" onClick={handleReturnClick}>
            Return
          </button>
        </div>
      </div>
      <div className="orderr">
        <div className="orders">
          <img src={laptop} />
          <p>Laptop ₹53k</p>
        </div>
        <div className="delivery">
          <h2>Delivered</h2>
          <p>Delivered on Sat,9 Aug</p>
          <div className="rate">
            <p>Rate this Product</p>
            <div className="stars">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
          </div>
          <button className="return" onClick={handleReturnClick}>
            Return
          </button>
        </div>
      </div>
      <div className="orderr">
        <div className="orders">
          <img src={laptop} />
          <p>Laptop ₹53k</p>
        </div>
        <div className="delivery">
          <h2>Delivered</h2>
          <p>Delivered on Sat,10 Aug</p>
          <div className="rate">
            <p>Rate this Product</p>
            <div className="stars">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
          </div>
          <button className="return" onClick={handleReturnClick}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};
