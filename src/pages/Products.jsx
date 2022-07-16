import React from "react";
import CategoryContainer from "../components/CategoryContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../styles/Product.scss";
import "../styles/_global.scss";

function Products() {
  return (
    <div>
      <Header />
      {/* <CategoryContainer /> */}
      <Sidebar />
    </div>
  );
}

export default Products;
