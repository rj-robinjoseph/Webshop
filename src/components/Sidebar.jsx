import React from "react";
import "../styles/Sidebar.scss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="breadcumb">
        <a href="./index.html">home</a>
        <span>
          <KeyboardDoubleArrowRightIcon />
        </span>
        <a href="./products.html">all products</a>
      </div>

      <div class="box">
        <span class="filter-header">Categories</span>
        <ul class="filter-list">
          <li>
            <a href="#">Wireless</a>
          </li>
          <li>
            <a href="#">In-ear headphone</a>
          </li>
          <li>
            <a href="#">Over-ear headphone</a>
          </li>
          <li>
            <a href="#">Sport headphone</a>
          </li>
        </ul>
      </div>

      <div class="box">
        <span class="filter-header">Rating</span>
        <ul class="filter-list">
          <li>
            <div class="group-checkbox">
              <input type="checkbox" id="remember1" />
              <label for="remember1">
                <span class="rating">
                  <StarIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </span>
                <i class="bx bx-check"></i>
              </label>
            </div>
          </li>
          <li>
            <div class="group-checkbox">
              <input type="checkbox" id="remember1" />
              <label for="remember1">
                <span class="rating">
                  <StarIcon />
                  <StarIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </span>
                <i class="bx bx-check"></i>
              </label>
            </div>
          </li>
          <li>
            <div class="group-checkbox">
              <input type="checkbox" id="remember1" />
              <label for="remember1">
                <span class="rating">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </span>
                <i class="bx bx-check"></i>
              </label>
            </div>
          </li>
          <li>
            <div class="group-checkbox">
              <input type="checkbox" id="remember1" />
              <label for="remember1">
                <span class="rating">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarOutlineIcon />
                </span>
                <i class="bx bx-check"></i>
              </label>
            </div>
          </li>
          <li>
            <div class="group-checkbox">
              <input type="checkbox" id="remember1" />
              <label for="remember1">
                <span class="rating">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
                <i class="bx bx-check"></i>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
