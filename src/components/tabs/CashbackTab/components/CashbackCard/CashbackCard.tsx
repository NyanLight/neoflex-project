import { CashbackCardData } from "./types/CashbackCardData.type";
import styles from './CashbackCard.module.css'

export function CashbackCard({title, description, color }: CashbackCardData) {
    return (
      <div className={styles.card} style={{backgroundColor: color}}>
        <div className={styles.description}>{description}</div>
        <h2 className={styles.title}>{title}</h2>
      </div>
    );
  }
  