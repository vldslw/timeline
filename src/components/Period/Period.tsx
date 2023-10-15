import styles from "./Period.module.scss";
import { Events } from "../Events/Events";

export const Period = () => {
  return (
    <div className={styles.period}>
      <h2 className={styles.heading}>2015 2022</h2>
      <Events />
    </div>
  );
};
