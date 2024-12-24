import { Button } from '../../ui/Button';
import styles from './Platinum.module.css';
import { Feature } from './Platinum.types';

const features: Feature[] = [
  { key: 0, title: 'Up to 160 days', regular: 'No percent' },
  {
    key: 1,
    title: 'Up to 600 000 ₽',
    regular: 'Credit limit',
  },
  {
    key: 2,
    title: '0 ₽',
    regular: 'Card service is free',
  },
];

export function Platinum() {
  return (
    <section className={styles.platinum}>
      <div className={styles.platinum__info}>
        <h1 className={styles.platinum__title}>Platinum digital credit card</h1>
        <div className={styles.platinum__description}>
          Our best credit card. Suitable for everyday spending and shopping.
          Cash withdrawals and transfers without commission and interest.
        </div>
        <div className={styles.platinum__features}>
          {features.map((feature) => {
            return (
              <div className={styles.platinum__feature} key={feature.key}>
                <div className={styles.feature__title}>{feature.title}</div>
                <div className={styles.feature__regular}>{feature.regular}</div>
              </div>
            );
          })}
        </div>
        <Button horizontalPadding='1rem' verticalPadding='1rem' borderRadius='8px' text="Apply for card" />
      </div>
      <div className={styles.platinum__card}>
        <img
          src="src/assets/platinumCard.png"
          alt=""
          className={styles.platinum__img}
        />
      </div>
    </section>
  );
}
