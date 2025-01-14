import { Button } from '../../../../ui/Button';
import styles from './Offer.module.css';
import { OfferProps } from './types/OfferProps.type';

export function Offer({
  requested,
  total,
  months,
  monthly,
  rate,
  insurance,
  salary,
}: OfferProps) {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img src="src/assets/offer.png" alt="" />
      </div>
      <div className={styles.card__fields}>
        <div className={styles.card__field}>Requested amount:{requested} ₽</div>
        <div className={styles.card__field}>Total amount:{total} ₽</div>
        <div className={styles.card__field}>For {months} months</div>
        <div className={styles.card__field}>Monthly payment: {monthly} ₽</div>
        <div className={styles.card__field}>Your rate: {rate}%</div>
        <div className={styles.card__field}>
          <span>Insurance included </span>
          {insurance ? (
            <img
              className={styles.field__icon}
              src="src/assets/input_check.svg"
              alt=""
            />
          ) : (
            <img
              className={styles.field__icon}
              src="src/assets/input_cross.png"
              alt=""
            />
          )}
        </div>
        <div className={styles.card__field}>
        Salary client
          {salary ? (
            <img
              className={styles.field__icon}
              src="src/assets/input_check.svg"
              alt=""
            />
          ) : (
            <img
              className={styles.field__icon}
              src="src/assets/input_cross.png"
              alt=""
            />
          )}
        </div>
      </div>
      <div className={styles.card__button}>
        <Button borderRadius='8px' text='Select' horizontalPadding='3rem' verticalPadding='1rem' handler={() => {return}} /></div>
    </div>
  );
}
