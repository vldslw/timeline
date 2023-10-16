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
        navigation={false}
        className="mySwiper"
        breakpoints={{
          980: {
            spaceBetween: 80,
            slidesPerView: 3,
            navigation: {
              nextEl: ".event-image-swiper-button-next",
              prevEl: ".event-image-swiper-button-prev",
              disabledClass: "event-swiper-button-disabled",
            },
            pagination: false,
          },
          640: {
            navigation: {
              nextEl: ".event-image-swiper-button-next",
              prevEl: ".event-image-swiper-button-prev",
              disabledClass: "event-swiper-button-disabled",
            },
            pagination: false,
          },
        }}
      >
        {sortedEvents.map((event: any) => (
          <SwiperSlide>
            <EventCard key={event.id} date={event.date} desc={event.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
