import "./Events.scss";
import { EventCard } from "../EventCard/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

export const Events = () => {
  return (
    <div className="events">
      <div className="event-swiper-button event-image-swiper-button-next">
        <IoIosArrowForward />
      </div>
      <div className="event-swiper-button event-image-swiper-button-prev">
        <IoIosArrowBack />
      </div>
      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        navigation={{
          nextEl: ".event-image-swiper-button-next",
          prevEl: ".event-image-swiper-button-prev",
          disabledClass: "event-swiper-button-disabled",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
