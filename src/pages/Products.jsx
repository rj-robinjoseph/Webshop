import React from "react";
import "../styles/Products.scss";
import CategoryContainer from "../components/CategoryContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Featured from "../components/Featured";
import "../styles/Product.scss";
import "../styles/_global.scss";
import { FeaturedPlayList } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Products() {
  return (
    <div>
      <Header />
      {/* <CategoryContainer /> */}
      <Sidebar />
      <div className="All-products">
        <div className="product">
          <img
            src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdHNoaXJ0fGVufDB8fHx8MTY1NzQzMzcxMA&force=true&w=640"
            alt=""
          />
          <div className="details">
            <div>
              <h4>Red Tshirt</h4>
              <p>$12.00</p>
            </div>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="product">
          <img
            src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdHNoaXJ0fGVufDB8fHx8MTY1NzQzMzcxMA&force=true&w=640"
            alt=""
          />
          <div className="details">
            <div>
              <h4>Red Tshirt</h4>
              <p>$12.00</p>
            </div>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="product">
          <img
            src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdHNoaXJ0fGVufDB8fHx8MTY1NzQzMzcxMA&force=true&w=640"
            alt=""
          />
          <div className="details">
            <div>
              <h4>Red Tshirt</h4>
              <p>$12.00</p>
            </div>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="product">
          <img
            src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdHNoaXJ0fGVufDB8fHx8MTY1NzQzMzcxMA&force=true&w=640"
            alt=""
          />
          <div className="details">
            <div>
              <h4>Red Tshirt</h4>
              <p>$12.00</p>
            </div>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="product">
          <img
            src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdHNoaXJ0fGVufDB8fHx8MTY1NzQzMzcxMA&force=true&w=640"
            alt=""
          />
          <div className="details">
            <div>
              <h4>Red Tshirt</h4>
              <p>$12.00</p>
            </div>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="product">
          <img
            src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdHNoaXJ0fGVufDB8fHx8MTY1NzQzMzcxMA&force=true&w=640"
            alt=""
          />
          <div className="details">
            <div>
              <h4>Red Tshirt</h4>
              <p>$12.00</p>
            </div>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="product">
          <img
            src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdHNoaXJ0fGVufDB8fHx8MTY1NzQzMzcxMA&force=true&w=640"
            alt=""
          />
          <div className="details">
            <div>
              <h4>Red Tshirt</h4>
              <p>$12.00</p>
            </div>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="product">
          <img
            src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdHNoaXJ0fGVufDB8fHx8MTY1NzQzMzcxMA&force=true&w=640"
            alt=""
          />
          <div className="details">
            <div>
              <h4>Red Tshirt</h4>
              <p>$12.00</p>
            </div>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="product">
          <img
            src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdHNoaXJ0fGVufDB8fHx8MTY1NzQzMzcxMA&force=true&w=640"
            alt=""
          />
          <div className="details">
            <div>
              <h4>Red Tshirt</h4>
              <p>$12.00</p>
            </div>
            <FavoriteBorderIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
