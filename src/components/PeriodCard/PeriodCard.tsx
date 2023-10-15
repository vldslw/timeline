import styles from "./PeriodCard.module.scss";
import { Events } from "../Events/Events";

type Props = {
  startDate: number;
  endDate: number;
};

export const PeriodCard = ({ startDate, endDate }: Props) => {
  return (
    <div className={styles.period}>
      <h2 className={styles.heading}>{`${startDate} ${endDate}`}</h2>
      <Events startDate={startDate} endDate={endDate} />
    </div>
  );
};
