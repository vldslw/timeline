import "./index.scss";
import { Heading } from "../../components/Heading/Heading";
import { Period } from "../../components/Period/Period";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Home = () => {
  return (
    <div className="home">
      <Heading />
      <div className="swiper-button image-swiper-button-next">
        <IoIosArrowForward />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <IoIosArrowBack />
      </div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Pagination, Navigation]}
        className="home-swiper"
      >
        <SwiperSlide>
          <Period />
        </SwiperSlide>
        <SwiperSlide>
          <Period />
        </SwiperSlide>
        <SwiperSlide>
          <Period />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
