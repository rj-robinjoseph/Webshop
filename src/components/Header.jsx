import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import { Search } from "@mui/icons-material";
import Logo from "../assets/logo.png";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

function Header() {
  return (
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to="/men">Men</Link>
            <Link to="/men">Women</Link>
            <Link to="/men">Shop</Link>
            <Link to="/collections">Top Collection</Link>
            <Link to="/offers" className="highlight">
              Best Deals
            </Link>
          </li>
        </ul>
        <div className="logo">
          {/* <h1>Webshop</h1> */}
          <img src={Logo} alt="" />
        </div>
        <div className="right">
          <div className="search">
            <Search className="search-icon" />
            <button className="search-btn">Search</button>
          </div>
          <div className="right-btns">
            <button>
              <Link to="login">Log In</Link>
            </button>
            <button>
              <Link to="signup">Sign Up</Link>
            </button>
            {/* <ShoppingBasket className="basket" /> */}
            {/* <ShoppingBagOutlinedIcon className="basket" /> */}
            <ShoppingCartTwoToneIcon className="basket" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
