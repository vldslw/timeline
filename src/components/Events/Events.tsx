import "./Events.scss";
import { useState, useEffect } from "react";
import { EventCard } from "../EventCard/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { eventsList } from "../../utils/eventsList";

type Props = {
  startDate: number;
  endDate: number;
};

export const Events = ({ startDate, endDate }: Props) => {
  const [sortedEvents, setSortedEvents] = useState([]);

  useEffect(() => {
    const events: any = [];
    eventsList.filter((event) => {
      if (event.date >= startDate && event.date <= endDate) {
        events.push(event);
      }
    });
    console.log(events);
    setSortedEvents(events);
  }, []);

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
        {sortedEvents.map((event: any) => (
          <SwiperSlide>
            <EventCard date={event.date} desc={event.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
