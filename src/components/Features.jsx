import React from "react";
import "../styles/Features.scss";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Features() {
  return (
    <div>
      <div className="features-container">
        <h1>Our Features</h1>
        <div className="row container">
          <div className="col">
            <div className="icon">
              <CheckBoxIcon />
            </div>
            <h3>Easy Order System</h3>
            <p>
              Lorem Ispum is a placeholder text commonly used as a free text.
            </p>
          </div>
          <div className="col">
            <div className="icon">
              <AccountBoxIcon />
            </div>
            <h3>On Time Delievery</h3>
            <p>
              Lorem Ispum is a placeholder text commonly used as a free text.
            </p>
          </div>
          <div className="col">
            <div className="icon">
              <MonetizationOnIcon />
            </div>
            <h3>Money Back Gaurantee</h3>
            <p>
              Lorem Ispum is a placeholder text commonly used as a free text.
            </p>
          </div>
          <div className="col">
            <div className="icon">
              <SupportAgentIcon />
            </div>
            <h3>24/7 Customer Support</h3>
            <p>
              Lorem Ispum is a placeholder text commonly used as a free text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
