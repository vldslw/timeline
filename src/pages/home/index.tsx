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
      <div className="home__navigation">
        <div className="swiper-custom-pagination"></div>
        <div className="home__navigation-buttons">
          <div className="swiper-button image-swiper-button-prev">
            <IoIosArrowBack />
          </div>
          <div className="swiper-button image-swiper-button-next">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <Swiper
        pagination={{
          el: ".swiper-custom-pagination",
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
          <Period startDate={2000} endDate={2007} />
        </SwiperSlide>
        <SwiperSlide>
          <Period startDate={2008} endDate={2014} />
        </SwiperSlide>
        <SwiperSlide>
          <Period startDate={2015} endDate={2022} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
