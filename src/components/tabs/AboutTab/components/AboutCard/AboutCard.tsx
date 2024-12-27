import styles from './AboutCard.module.css';
import { AboutCardProps } from './AboutCardProps.type';


export function AboutCard({ icon, title, description, color }: AboutCardProps) {
  return (
    <div className={styles.card} style={{backgroundColor: color}}>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
