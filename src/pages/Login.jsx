import React from "react";
import "../styles/Login.scss";
import Main from "../assets/main.jpg";

function login() {
  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="left-container">
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
            <button>Login</button>
          </form>
          <p>OR</p>
          <button>Facebook</button>
          <button>Google</button>
        </div>
        <div className="right-container">
          <h1>We will give you the best.</h1>
        </div>
      </div>
    </div>
  );
}

export default login;
