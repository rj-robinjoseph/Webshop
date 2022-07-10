import React from "react";
import "../styles/Categories.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay, Navigation } from "swiper";

function Categories() {
  return (
    <div className="cat-container">
      <h1>Top Categories</h1>

      <Swiper
        slidesPerView={6}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Grid, Pagination, Autoplay, Navigation]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">Men</SwiperSlide>
        <SwiperSlide className="swiper-slide">Women</SwiperSlide>
        <SwiperSlide className="swiper-slide">Shoes</SwiperSlide>
        <SwiperSlide className="swiper-slide">Watch</SwiperSlide>
        <SwiperSlide className="swiper-slide">Jeans</SwiperSlide>
        <SwiperSlide className="swiper-slide">Shirts</SwiperSlide>
        <SwiperSlide className="swiper-slide">Tops</SwiperSlide>
        <SwiperSlide className="swiper-slide">T-shirts</SwiperSlide>
        <SwiperSlide className="swiper-slide">Jackets</SwiperSlide>
        <SwiperSlide className="swiper-slide">Bags</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Categories;
