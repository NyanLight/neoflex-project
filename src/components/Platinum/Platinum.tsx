import { Button } from '../../ui/Button';
import styles from './Platinum.module.css';
import { Feature } from './Platinum.types';
import { Tooltip } from '../../ui/Tooltip';

const clickHandler = () => {
  const prescoring = document.getElementById('prescoring');
  prescoring?.scrollIntoView({behavior: 'smooth'});
}

const features: Feature[] = [
  { key: 0, title: 'Up to 160 days', regular: 'No percent',
    tooltip: "When repaying the full debt up to 160 days."
   },
  {
    key: 1,
    title: 'Up to 600 000 ₽',
    regular: 'Credit limit',
    tooltip: "Over the limit willaccrue percent"
  },
  {
    key: 2,
    title: '0 ₽',
    regular: 'Card service is free',
    tooltip: "Promotion valid until December 31, 2022.",
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
                <Tooltip text={feature.tooltip} >
                <div className={styles.feature__regular}>{feature.regular}</div>
                </Tooltip>
              </div>
            );
          })}
        </div>
        <Button horizontalPadding='1rem' verticalPadding='1rem' borderRadius='8px' text="Apply for card" handler={clickHandler} />
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
