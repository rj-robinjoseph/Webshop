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
        <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 10</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Categories;
