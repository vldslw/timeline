import styles from "./EventCard.module.scss";

export const EventCard = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>2015</h1>
      <p className={styles.text}>
        13 сентября — частное солнечное затмение, видимое в Южной Африке и части
        Антарктиды
      </p>
    </div>
  );
};
