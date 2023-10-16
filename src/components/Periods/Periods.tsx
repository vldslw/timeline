import "./Periods.scss";
import { PeriodCard } from "../../components/PeriodCard/PeriodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Periods = () => {
  return (
    <div>
      <div className="periods__navigation">
        <div className="swiper-custom-pagination"></div>
        <div className="periods__navigation-buttons">
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
          <PeriodCard startDate={1987} endDate={1991} />
        </SwiperSlide>
        <SwiperSlide>
          <PeriodCard startDate={1992} endDate={1997} />
        </SwiperSlide>
        <SwiperSlide>
          <PeriodCard startDate={1999} endDate={2004} />
        </SwiperSlide>
        <SwiperSlide>
          <PeriodCard startDate={2015} endDate={2022} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
