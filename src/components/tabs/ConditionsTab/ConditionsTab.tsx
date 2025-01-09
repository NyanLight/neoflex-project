import styles from './ConditionsTab.module.css';
import { ConditionsProps } from './types/ConditionsProps.type';

export function ConditionsTab({ conditions }: { conditions: ConditionsProps }) {
  return (
    <div className={styles.conditions}>
      {conditions.map((condition, index) => (
        <div className={styles.condition} key={index}>
          <div className={styles.condition__title}>{condition.title}</div>
          <div className={styles.condition__descriptions}>
            <div className={styles.condition__description}>
              {condition.description}
            </div>
            {condition.secondDescription ? (
              <div className={styles.condition__description}>
                {condition.secondDescription}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
