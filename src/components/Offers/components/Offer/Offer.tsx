import { Button } from '../../../../ui/Button';
import styles from './Offer.module.css';
import { OfferProps } from './types/OfferProps.type';

export function Offer({
  applicationId,
  isInsuranceEnabled,
  isSalaryClient,
  monthlyPayment,
  rate,
  requestedAmount,
  term,
  totalAmount,
  handler,
}: OfferProps) {
  async function btnHandler() {
    const response = await fetch('http://localhost:8080/application/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        applicationId,
        isInsuranceEnabled,
        isSalaryClient,
        monthlyPayment,
        rate,
        requestedAmount,
        term,
        totalAmount,
      }),
    });
    if (response.ok) {
      await handler();
      localStorage.setItem('offer-sent', 'true');
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img src="src/assets/offer.png" alt="" />
      </div>
      <div className={styles.card__fields}>
        <div className={styles.card__field}>
          Requested amount:{requestedAmount} ₽
        </div>
        <div className={styles.card__field}>Total amount:{totalAmount} ₽</div>
        <div className={styles.card__field}>For {term} months</div>
        <div className={styles.card__field}>
          Monthly payment: {monthlyPayment} ₽
        </div>
        <div className={styles.card__field}>Your rate: {rate}%</div>
        <div className={styles.card__field}>
          <span>Insurance included </span>
          {isInsuranceEnabled ? (
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
          {isSalaryClient ? (
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
        <Button
          borderRadius="8px"
          text="Select"
          horizontalPadding="3rem"
          verticalPadding="1rem"
          handler={btnHandler}
        />
      </div>
    </div>
  );
}
