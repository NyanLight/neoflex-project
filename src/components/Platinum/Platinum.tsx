import { Button } from '../../ui/Button';
import styles from './Platinum.module.css';
import { Tooltip } from '../../ui/Tooltip';
import { features } from './constants';
import { useBanner } from './hooks/useBanner';

export function Platinum() {
  const {step, clickHandler} = useBanner();

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
                <Tooltip text={feature.tooltip}>
                  <div className={styles.feature__regular}>
                    {feature.regular}
                  </div>
                </Tooltip>
              </div>
            );
          })}
        </div>
        <Button
          horizontalPadding="1rem"
          verticalPadding="1rem"
          borderRadius="8px"
          text={step === 1 ? 'Apply for card' : 'Continue registration'}
          handler={clickHandler}
        />
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
