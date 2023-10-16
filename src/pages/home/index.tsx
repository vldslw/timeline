import styles from "./index.module.scss";
import { useState } from "react";
import { Heading } from "../../components/Heading/Heading";
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
    <div className={styles.home}>
      <Heading />
      <div className={styles.home__period}>
        <Carousel onPeriodChange={handlePeriodChange} />
        <div className={styles.home__heading}>
          <h2 className={styles.home__start}>{period.startDate}</h2>
          <h2 className={styles.home__end}>{period.endDate}</h2>
        </div>
        <Events startDate={period.startDate} endDate={period.endDate} />
      </div>
    </div>
  );
};
