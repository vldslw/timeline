import "./Carousel.scss";
import { useLayoutEffect, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ReactComponent as Path } from "../../assets/path.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Carousel = ({ onPeriodChange }) => {
  gsap.registerPlugin(MotionPathPlugin);
  const tl = useRef();
  const items = useRef();
  const [tracker, setTracker] = useState(0);
  const [currentPage, setCurrentPage] = useState("01");
  const [totalPages, setTotalPages] = useState("06");
  let step = 1 / 6;
  let wrapProgress = gsap.utils.wrap(0, 1);
  let snap = gsap.utils.snap(step);

  useEffect(() => {
    onPeriodChange(tracker);
    setCurrentPage(`0${tracker + 1}`);
  }, [tracker]);

  useLayoutEffect(() => {
    items.current = gsap.utils.toArray(".item").reverse();
    gsap.set(items.current, {
      motionPath: {
        path: "#circlePath",
        align: "#circlePath",
        alignOrigin: [0.5, 0.5],
        end: (i) => (i + 2) / 2 / items.current.length + 0.124,
      },
    });
    tl.current = gsap
      .timeline({ paused: true })
      .to(".wrapper", {
        rotation: 360,
        transformOrigin: "center",
        duration: 1,
        ease: "none",
      })
      .to(
        items.current,
        {
          rotation: "-=360",
          transformOrigin: "center",
          duration: 1,
          ease: "none",
        },
        0,
      );
  }, []);

  function moveNext() {
    gsap.to(tl.current, {
      progress: snap(tl.current.progress() + step),
      modifiers: {
        progress: wrapProgress,
      },
    });
  }

  function trackerNext() {
    if (tracker === 5) {
      setTracker(0);
      return;
    } else {
      setTracker(tracker + 1);
    }
  }

  function trackerPrev() {
    if (tracker === 0) {
      setTracker(5);
      return;
    }
    setTracker(tracker - 1);
  }

  function movePrev() {
    gsap.to(tl.current, {
      progress: snap(tl.current.progress() - step),
      modifiers: {
        progress: wrapProgress,
      },
    });
  }

  return (
    <div className="carousel">
      <div className="container">
        <div className="wrapper">
          <Path />
          <div
            id="item1"
            key={0}
            className={`item ${tracker === 0 ? "item_active" : ""}`}
          >
            1
          </div>
          <div
            id="item2"
            key={1}
            className={`item ${tracker === 1 ? "item_active" : ""}`}
          >
            2
          </div>
          <div
            id="item3"
            key={2}
            className={`item ${tracker === 2 ? "item_active" : ""}`}
          >
            3
          </div>
          <div
            id="item4"
            key={3}
            className={`item ${tracker === 3 ? "item_active" : ""}`}
          >
            4
          </div>
          <div
            id="item5"
            key={4}
            className={`item ${tracker === 4 ? "item_active" : ""}`}
          >
            5
          </div>
          <div
            id="item6"
            key={5}
            className={`item ${tracker === 5 ? "item_active" : ""}`}
          >
            6
          </div>
        </div>
      </div>
      <div className="carousel-buttons">
        <p className="carousel-paginator">{`${currentPage}/${totalPages}`}</p>
        <div
          id="prev"
          className="carousel-button carousel-button_left"
          onClick={() => {
            trackerPrev();
            moveNext();
          }}
        >
          <IoIosArrowBack />
        </div>
        <div
          id="next"
          className="carousel-button carousel-button_right"
          onClick={() => {
            trackerNext();
            movePrev();
          }}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};
