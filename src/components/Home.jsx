import React from "react";
import wallpaper from "../images/wall.webp";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.jpg";
import "./Home.css";
import wallpaper2 from "../images/wallpaper.jpg";
export const Home = () => {
  return (
    <>
      <div className="containerr">
        <div className="firstt">
          <img src={wallpaper} />
          <div className="overlay">
            <p className="title">School gear, check!</p>
            <h1>Ace the year</h1>
            <button className="shop-btn">Shop All</button>
          </div>
        </div>
        <div className="secondd">
          <img src={img2} className="img2" />
          <div className="text">
            <p>"woke up like,</p>
            <p>this beeding"</p>
            <button className="btn">Shop All</button>
          </div>

          <img src={img3} className="img3" />
          <div className="textt">
            <p>Master the mini kitchen</p>

            <button className="btnn">Shop All</button>
          </div>
        </div>
      </div>
      <div className="containerr">
        <div className="firstt">
          <img src={wallpaper2} />
          <div className="wall">
            <p className="title ">School gear, check!</p>
            <h1>Ace the year</h1>
            <button className="shop-btn">Shop All</button>
          </div>
        </div>
        <div className="secondd">
          <img src={img2} className="img2" />
          <div className="text">
            <p>"woke up like,</p>
            <p>this beeding"</p>
            <button className="btn">Shop All</button>
          </div>

          <img src={img3} className="img3" />
          <div className="textt">
            <p>Master the mini kitchen</p>

            <button className="btnn">Shop All</button>
          </div>
        </div>
      </div>
    </>
  );
};
