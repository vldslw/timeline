import "./Events.scss";
import { useState, useEffect } from "react";
import { EventCard } from "../EventCard/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { eventsList } from "../../utils/eventsList";

type Props = {
  startDate: number;
  endDate: number;
};

export const Events = ({ startDate, endDate }: Props) => {
  const [sortedEvents, setSortedEvents] = useState<
    { id: number; date: number; desc: string }[]
  >([]);

  useEffect(() => {
    const events: { id: number; date: number; desc: string }[] = [];
    eventsList.filter((event) => {
      if (event.date >= startDate && event.date <= endDate) {
        events.push(event);
      }
    });
    setSortedEvents(events);
  }, [startDate, endDate]);

  return (
    <div className="events">
      <div className="event-swiper-button event-image-swiper-button-next">
        <IoIosArrowForward />
      </div>
      <div className="event-swiper-button event-image-swiper-button-prev">
        <IoIosArrowBack />
      </div>
      <Swiper
        spaceBetween={25}
        slidesPerView={2}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".event-image-swiper-button-next",
          prevEl: ".event-image-swiper-button-prev",
          disabledClass: "event-swiper-button-disabled",
        }}
        className="mySwiper"
        breakpoints={{
          640: {
            spaceBetween: 80,
            slidesPerView: 3,
          },
        }}
      >
        {sortedEvents.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard key={event.id} date={event.date} desc={event.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
