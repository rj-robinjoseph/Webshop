import React from "react";
import "../styles/Banner.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Banner() {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "none",
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="my-swiper"
        >
          <SwiperSlide className="slide-1">
            <div className="content">
              <h1>Latest Collections</h1>
              <button>Explore</button>
            </div>
            <div className="bottom-txt">
              <p>Curated Collections.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-2">Slide 2</SwiperSlide>
          <SwiperSlide className="slide-3">Slide 3</SwiperSlide>
          <SwiperSlide className="slide-4">Slide 4</SwiperSlide>
          <SwiperSlide className="slide-5">Slide 5</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}

export default Banner;
