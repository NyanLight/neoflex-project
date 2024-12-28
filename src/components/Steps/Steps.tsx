import { Step } from './types/Step.type';
import styles from './Steps.module.css';
import { Divider } from '../../ui/Divider';

const stepsData: Step[] = [
  {
    number: 1,
    lineWidth: '250px',
    text: 'Fill out an online application - you do not need to visit the bank',
  },
  {
    number: 2,
    lineWidth: '300px',
    text: "Find out the bank's decision immediately after filling out the application",
  },
  {
    number: 3,
    lineWidth: '335px',
    text: 'The bank will deliver the card free of charge, wherever convenient, to your city',
  },
];
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
