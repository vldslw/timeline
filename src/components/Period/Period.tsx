import styles from "./Period.module.scss";
import { Events } from "../Events/Events";

type Props = {
  startDate: number;
  endDate: number;
};

export const Period = ({ startDate, endDate }: Props) => {
  return (
    <div className={styles.period}>
      <h2 className={styles.heading}>{`${startDate} ${endDate}`}</h2>
      <Events />
    </div>
  );
};
