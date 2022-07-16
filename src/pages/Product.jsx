import React, { useState } from "react";
import "../styles/Product.scss";
import "../styles/_global.scss";
import Header from "../components/Header";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Header />
      <div className="product-container">
        <div class="breadcumb">
          <a href="./index.html">home</a>
          <span>
            <KeyboardDoubleArrowRightIcon />
          </span>
          <a href="./products.html">all products</a>
          <span>
            <KeyboardDoubleArrowRightIcon />
          </span>
          <a href="./product-detail.html">JBL Tune 750TNC</a>
        </div>
        <div className="product-row">
          <div className="col-5 col-md-12">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          {/*  */}
          <div className="col-7 col-md-12">
            <div className="product-info">
              <h1>JBL TUNE 750TNC</h1>
              <div className="product-info-detail">
                <span className="product-info-detail-title">Brand:</span>
                <a href="#">JBL</a>
              </div>
              <div className="product-info-detail">
                <span className="product-info-detail-title">Rated:</span>
                <span className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </span>
              </div>
              <p className="product-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                libero alias officiis dolore doloremque eveniet culpa
                dignissimos, itaque, cum animi excepturi sed veritatis
                asperiores soluta, nisi atque quae illum. Ipsum.
              </p>
              <div className="product-info-price">$2345</div>
              <div className="product-quantity-wrapper">
                <span className="product-quantity-btn">
                  <i className="bx bx-minus"></i>
                </span>
                <span className="product-quantity">1</span>
                <span className="product-quantity-btn">
                  <i className="bx bx-plus"></i>
                </span>
              </div>
              <div>
                <button className="btn-flat btn-hover">add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
