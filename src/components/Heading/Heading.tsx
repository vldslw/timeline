import styles from "./Heading.module.scss";
import { ReactComponent as Bar } from "../../assets/bar.svg";

export const Heading = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__bar}></div>
      <h1 className={styles.header__title}>Исторические даты</h1>
    </div>
  );
};
