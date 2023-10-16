import "./index.scss";
import { useState } from "react";
import { Heading } from "../../components/Heading/Heading";
// import { Periods } from "../../components/Periods/Periods";
import { Carousel } from "../../components/Carousel/Carousel";
import { Events } from "../../components/Events/Events";

export const Home = () => {
  const [period, setPeriod] = useState({ startDate: 1987, endDate: 1991 });

  function handlePeriodChange(tracker: number) {
    console.log(tracker);
    if (tracker === 0) {
      setPeriod({ startDate: 1987, endDate: 1991 });
    } else if (tracker === 1) {
      setPeriod({ startDate: 1992, endDate: 1997 });
    } else if (tracker === 2) {
      setPeriod({ startDate: 1999, endDate: 2004 });
    } else if (tracker === 3) {
      setPeriod({ startDate: 2015, endDate: 2022 });
    } else if (tracker === 4) {
      setPeriod({ startDate: 1987, endDate: 1991 });
    } else if (tracker === 5) {
      setPeriod({ startDate: 1987, endDate: 1991 });
    }
  }

  return (
    <div className="home">
      <Heading />
      <Carousel onPeriodChange={handlePeriodChange} />
      <Events startDate={period.startDate} endDate={period.endDate} />
      {/* <Periods /> */}
    </div>
  );
};
