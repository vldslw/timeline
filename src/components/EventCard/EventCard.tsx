import styles from "./EventCard.module.scss";

type Props = {
  date: number;
  desc: string;
};

export const EventCard = ({ date, desc }: Props) => {
  return (
    <div className={styles.event}>
      <h1 className={styles.event__heading}>{date}</h1>
      <p className={styles.event__text}>{desc}</p>
    </div>
  );
};
