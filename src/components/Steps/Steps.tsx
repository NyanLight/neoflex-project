import styles from './Steps.module.css';
import { Divider } from '../../ui/Divider';
import { stepsData } from './constants';


export function Steps() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>How to get a card</h2>
      <div className={styles.steps}>
        {stepsData.map((step) => (
          <div className={styles.step}>
            <div className={styles.step__top}>
              <div className={styles.step__number}>{step.number}</div>
              <Divider
                direction="horizontal"
                borderWidth="2px"
                borderStyle="solid"
                borderColor="rgba(128, 128, 128, 0.4)"
              />
            </div>
            <div className={styles.step__bottom}>{step.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
