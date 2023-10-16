import styles from "./Heading.module.scss";
import { ReactComponent as Bar } from "../../assets/bar.svg";

export const Heading = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.heading__bar}></div>
      <h1 className={styles.heading__title}>Исторические даты</h1>
    </div>
  );
};
