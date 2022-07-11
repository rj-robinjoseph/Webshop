import React from "react";
import "../styles/Signup.scss";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

function signup() {
  return (
    <div className="signup-wrapper">
      <div className="container">
        <div className="right-container">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <ArrowBackIosIcon className="back-arrow" />
          </Link>
          <h1>Explore the best collections.</h1>
        </div>
        <div className="left-container">
          <form action="">
            <h1>Create your account.</h1>
            <div className="input">
              <label>Email</label>
              <input type="text" placeholder="Enter your email address." />
            </div>
            <div className="input">
              <label>Password</label>
              <input type="password" placeholder="Enter your password." />
            </div>
            <button className="login">Create Account</button>
            <p className="or">OR</p>
            <p className="socialup">Sign Up using Social accounts.</p>
          </form>
          <div className="signup-social">
            <div className="social-login">
              <img src={Facebook} alt="" className="social" />
              <img src={Google} alt="" className="social" />
            </div>
            <p className="signup">
              Have an account?{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                Log In!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
