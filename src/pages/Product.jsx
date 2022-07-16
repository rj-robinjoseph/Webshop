import React, { useState } from "react";
import "../styles/Product.scss";
import "../styles/_global.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Desc1 from "../assets/desc-1.png";
import Desc2 from "../assets/desc-2.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
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
        <div className="breadcumb">
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
                <span>Brand:</span>
                <a href="#">JBL</a>
              </div>
              <div className="product-info-detail">
                <span>Rated:</span>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
                <StarOutlineIcon />
              </div>
              <p className="product-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                libero alias officiis dolore doloremque eveniet culpa
                dignissimos, itaque, cum animi excepturi sed veritatis
                asperiores soluta, nisi atque quae illum. Ipsum.
              </p>
              <div className="product-info-price">$ 2345</div>
              <div className="product-quantity-wrapper">
                <span className="product-quantity-btn">
                  <RemoveIcon />
                </span>
                <span className="product-quantity">1</span>
                <span className="product-quantity-btn">
                  <AddIcon />
                </span>
              </div>
              <div className="btns">
                <button className="btn-flat btn-hover">Add to Cart</button>
                <button className="btn-flat btn-hover">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="box-header">description</div>
          <div className="product-detail-description">
            <div className="product-detail-description-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laudantium obcaecati odit dolorem, doloremque accusamus esse
                neque ipsa dignissimos saepe quisquam tempore perferendis
                deserunt sapiente! Recusandae illum totam earum ratione. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
                incidunt maxime rerum reprehenderit voluptas asperiores ipsam
                quas consequuntur maiores, at odit obcaecati vero sunt!
                Reiciendis aperiam perferendis consequuntur odio quas. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat
                eum veniam doloremque nihil repudiandae odio ratione culpa
                libero tempora. Expedita, quo molestias. Minus illo quis
                dignissimos aliquid sapiente error!
              </p>
              <img src={Desc1} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                accusantium officia, quae fuga in exercitationem aliquam labore
                ex doloribus repellendus beatae facilis ipsam. Veritatis vero
                obcaecati iste atque aspernatur ducimus. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Repellat quam praesentium id
                sit amet magnam ad, dolorum, cumque iste optio itaque expedita
                eius similique, ab adipisci dicta. Quod, quibusdam quas. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Odit, in
                corrupti ipsam sint error possimus commodi incidunt suscipit sit
                voluptatum quibusdam enim eligendi animi deserunt recusandae
                earum natus voluptas blanditiis?
              </p>
              <img src={Desc2} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                accusantium officia, quae fuga in exercitationem aliquam labore
                ex doloribus repellendus beatae facilis ipsam. Veritatis vero
                obcaecati iste atque aspernatur ducimus. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Repellat quam praesentium id
                sit amet magnam ad, dolorum, cumque iste optio itaque expedita
                eius similique, ab adipisci dicta. Quod, quibusdam quas. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Odit, in
                corrupti ipsam sint error possimus commodi incidunt suscipit sit
                voluptatum quibusdam enim eligendi animi deserunt recusandae
                earum natus voluptas blanditiis?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
