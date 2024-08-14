import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="container">
      <div className={!display ? "signin" : "main"}>
        <button
          className="sign"
          onClick={() => setDisplay(true)}
          style={{ background: "rgb(5, 142, 246)" }}
        >
          Sign Up
        </button>
        <button
          className="sign"
          onClick={() => setDisplay(false)}
          style={{ background: "rgb(5, 142, 246)" }}
        >
          Sign In
        </button>
      </div>
      <div>
        {display ? (
          <>
            <h1 className="title">Sign Up</h1>
            <div>
              <div className="name_cont">
                <input placeholder="First Name" className="name" />
                <input placeholder="Last Name" className="name" />
              </div>
              <div className="name_cont">
                <input placeholder="Email" className="otherfield" />
              </div>
              <div className="name_cont">
                <input
                  placeholder="Password"
                  type="password"
                  className="otherfield"
                />
              </div>
              <div className="gender-input">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender">
                  <option value="male" className="male">
                    Male
                  </option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button className="login">Sign Up</button>
            </div>
          </>
        ) : (
          <>
            <h1 className="title">Sign In</h1>
            <div>
              <div className="name_cont">
                <input placeholder="Email" className="otherfield" />
              </div>
              <div className="name_cont">
                <input
                  placeholder="Password"
                  type="password"
                  className="otherfield"
                />
              </div>
              <button className="login">Sign In</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
