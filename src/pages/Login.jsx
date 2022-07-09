import React from "react";
import "../styles/Login.scss";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="left-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <ArrowBackIosIcon className="back-arrow" />
          </Link>

          <form action="">
            <h1>Welcome Back!</h1>
            <div className="input">
              <label>Email</label>
              <input type="text" placeholder="Enter your email address." />
            </div>
            <div className="input">
              <label>Password</label>
              <input type="password" placeholder="Enter your password." />
            </div>
            <p>Forget your password?</p>
            <button className="login">Login</button>
            <p className="or">OR</p>
          </form>
          <div className="signup-social">
            <div className="social-login">
              <img src={Facebook} alt="" className="social" />
              <img src={Google} alt="" className="social" />
            </div>
            <p className="signup">
              Not a member yet?{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                Sign Up!
              </Link>
            </p>
          </div>
        </div>
        <div className="right-container">
          <h1>We will give you the best.</h1>
        </div>
      </div>
    </div>
  );
}

export default login;
