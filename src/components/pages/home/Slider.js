import React from "react";

// Core modules imports are same as usual
import { Navigation, Pagination, Scrollbar } from "swiper";

// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Slide1 from "../../slides/Slide1";
import Slide2 from "../../slides/Slide2";

const Slider = () => {
  return (
    <Swiper
      className="pt-5"
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Slide1 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide2 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
