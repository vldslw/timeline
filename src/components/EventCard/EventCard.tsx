import styles from "./EventCard.module.scss";

type Props = {
  date: number;
  desc: string;
};

export const EventCard = ({ date, desc }: Props) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>{date}</h1>
      <p className={styles.text}>{desc}</p>
    </div>
  );
};
