import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";
import {useAuth} from '../utils/AuthContext';



export const Login = () => {
  const {login} = useAuth();
  const [display, setDisplay] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("male");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = async () => {
    try {
      const response = await Axios.post("https://return-reduce-backend.onrender.com/login", {
        email,
        password,
      });
      console.log("Sign In Response:", response.data);
      login();
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error("Error signing in:", error);
      setErrorMessage("Invalid email or password."); // Display error message
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await Axios.post("https://return-reduce-backend.onrender.com/signup", {
        email,
        password,
      });
      console.log("Sign Up Response:", response.data);
      setDisplay(false); // Redirect to login after successful sign up
      // Optionally reset form fields
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage("Sign up failed. Please try again."); // Display error message
    }
  };

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
                <input
                  placeholder="First Name"
                  className="name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  placeholder="Last Name"
                  className="name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="name_cont">
                <input
                  placeholder="Email"
                  className="otherfield"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="name_cont">
                <input
                  placeholder="Password"
                  type="password"
                  className="otherfield"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="gender-input">
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male" className="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button className="login" onClick={handleSignUp}>Sign Up</button>
              {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
          </>
        ) : (
          <>
            <h1 className="title">Sign In</h1>
            <div>
              <div className="name_cont">
                <input
                  placeholder="Email"
                  className="otherfield"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="name_cont">
                <input
                  placeholder="Password"
                  type="password"
                  className="otherfield"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="login" onClick={handleSignIn}>Sign In</button>
              {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
