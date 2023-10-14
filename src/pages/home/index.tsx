import styles from "./index.module.scss";
import { Heading } from "../../components/Heading/Heading";

export const Home = () => {
  return (
    <div className={styles.page}>
      <Heading />
    </div>
  );
};
