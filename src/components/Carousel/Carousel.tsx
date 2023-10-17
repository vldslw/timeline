import "./Carousel.scss";
import { useLayoutEffect, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ReactComponent as Path } from "../../assets/path.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type CarouselProps = {
  onPeriodChange: (period: number) => void;
};

export const Carousel = ({ onPeriodChange }: CarouselProps) => {
  gsap.registerPlugin(MotionPathPlugin);
  const tl = useRef<gsap.core.Timeline>();
  const items = useRef<HTMLElement[]>([]);
  const [tracker, setTracker] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState("01");
  const totalPages = `0${items.current.length}`;
  let step: number = 1 / items.current.length;
  let wrapProgress: (value: number) => number = gsap.utils.wrap(0, 1);
  let snap: (value: number) => number = gsap.utils.snap(step);

  useEffect(() => {
    onPeriodChange(tracker);
    setCurrentPage(`0${tracker + 1}`);
  }, [tracker]);

  useLayoutEffect(() => {
    items.current = gsap.utils
      .toArray(".carousel__item")
      .reverse() as HTMLElement[];
    let numCallbackRuns = 0;
    items.current.forEach((item) => {
      let endPosition =
        (numCallbackRuns + 2) / 2 / items.current.length + 0.124;
      numCallbackRuns++;
      gsap.set(item, {
        motionPath: {
          path: "#circlePath",
          align: "#circlePath",
          alignOrigin: [0.5, 0.5],
          end: endPosition,
        },
      });
    });
    tl.current = gsap
      .timeline({ paused: true })
      .to(".carousel__wrapper", {
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
      )
      .to(
        gsap.getById(tracker),
        {
          item: items.current.length,
          duration: 1,
          ease: "none",
          modifiers: {
            item(value) {
              return gsap.utils.wrap(
                0,
                items.current.length,
              )(items.current.length - Math.round(value));
            },
          },
        },
        0,
      );
  }, []);

  function trackerPrev() {
    if (tracker === 0) {
      setTracker(5);
    } else {
      setTracker(tracker - 1);
    }
  }

  function movePrev() {
    if (!tl.current) return;
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
    } else {
      setTracker(tracker + 1);
    }
  }

  function moveNext() {
    if (!tl.current) return;
    gsap.to(tl.current, {
      progress: snap(tl.current.progress() - step),
      modifiers: {
        progress: wrapProgress,
      },
    });
  }

  function moveWheel(amount: number) {
    if (!tl.current) return;
    let progress = tl.current.progress();
    tl.current.progress(wrapProgress(snap(tl.current.progress() + amount)));
    tl.current.progress(progress);

    gsap.to(tl.current, {
      progress: snap(tl.current.progress() + amount),
      modifiers: {
        progress: wrapProgress,
      },
    });
  }

  function handleClick(i: number) {
    let current = tracker;

    if (i === current) {
      return;
    }

    let differ = current - i;

    setTracker(i);

    if (Math.abs(differ) < items.current.length / 2) {
      moveWheel(differ * step);
    } else {
      var amt = items.current.length - Math.abs(differ);

      if (current > i) {
        moveWheel(amt * -step);
      } else {
        moveWheel(amt * step);
      }
    }
  }

  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="carousel__wrapper">
          <Path />
          <div
            id="item1"
            key={0}
            className={`carousel__item ${
              tracker === 0 ? "carousel__item_active" : ""
            }`}
            onClick={() => handleClick(0)}
          >
            1
          </div>
          <div
            id="item2"
            key={1}
            className={`carousel__item ${
              tracker === 1 ? "carousel__item_active" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            2
          </div>
          <div
            id="item3"
            key={2}
            className={`carousel__item ${
              tracker === 2 ? "carousel__item_active" : ""
            }`}
            onClick={() => handleClick(2)}
          >
            3
          </div>
          <div
            id="item4"
            key={3}
            className={`carousel__item ${
              tracker === 3 ? "carousel__item_active" : ""
            }`}
            onClick={() => handleClick(3)}
          >
            4
          </div>
          <div
            id="item5"
            key={4}
            className={`carousel__item ${
              tracker === 4 ? "carousel__item_active" : ""
            }`}
            onClick={() => handleClick(4)}
          >
            5
          </div>
          <div
            id="item6"
            key={5}
            className={`carousel__item ${
              tracker === 5 ? "carousel__item_active" : ""
            }`}
            onClick={() => handleClick(5)}
          >
            6
          </div>
        </div>
      </div>
      <div className="carousel__buttons">
        <p className="carousel__paginator">{`${currentPage}/${totalPages}`}</p>
        <button
          id="prev"
          className={`carousel__button carousel__button_left ${
            tracker === 0 && "carousel__button_disabled"
          }`}
          onClick={() => {
            trackerPrev();
            movePrev();
          }}
          disabled={tracker === 0}
        >
          <IoIosArrowBack />
        </button>
        <button
          id="next"
          className={`carousel__button carousel__button_right ${
            tracker === items.current.length - 1 && "carousel__button_disabled"
          }`}
          onClick={() => {
            trackerNext();
            moveNext();
          }}
          disabled={tracker === items.current.length - 1}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
