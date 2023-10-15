import styles from "./Events.module.scss";
import { EventCard } from "../EventCard/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Events = () => {
  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={3}
      navigation={true}
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
  );
};
