import { Button } from '../../ui/Button';
import styles from './Code.module.css';
import { useEffect, useState } from 'react';

export function Code() {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [invalid, setInvalid] = useState(false);
  const [isSent, setSent] = useState<boolean>(false);
  const rightAnswer = '1234'

  function handleChange(element, index) {
    if (isNaN(element.target.value)) return false;
    setOtp([
      ...otp.map((data, i) => (index === i ? element.target.value : data)),
    ]);

    if (element.target.value && element.target.nextSibling) {
      element.target.nextSibling.focus();
    }
  }

  useEffect(() => {
    const filledFields = otp.filter((value) => {
      return value != '';
    });
    if (filledFields.length === 4 && otp.join('') != rightAnswer) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [otp])

  useEffect(() => {
    if (otp.join('') === rightAnswer) {
      setSent(true);
    }
  }, [otp])

  return (
    <div>
      {isSent ? (
        <div className={styles.sentDiv}>
          <div className={styles.sentDiv__imgWrapper}>
            <img src="/src/assets/surprise.png" alt="" />
          </div>
          <div className={styles.sentDiv__title}>
            Congratulations! You have completed your new credit card.
          </div>
          <div className={styles.sentDiv__regular}>
            Your credit card will arrive soon. Thank you for choosing us!
          </div>
          <div className={styles.sentDiv__buttonWrapper}>
            <Button
              text="View other offers of our bank"
              handler={() => console.log('congratulations!')}
              verticalPadding="1rem"
              horizontalPadding="1rem"
              borderRadius="16px"
            />
          </div>
        </div>
      ) : (<section className={styles.code}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Please enter confirmation code</h2>
          <div className={styles.otp}>
            <div className={styles.otp__fields}>
              {otp.map((data, index) => (
                <input
                  value={data}
                  onChange={(element) => handleChange(element, index)}
                  className={data == '' ? styles.input : `${styles.input} ${styles.input__filled}`}
                  maxLength={1}
                  type="text"
                />
              ))}
            </div>
            <div className={invalid ? styles.otp__error : styles.hidden}>Invalid confirmation code</div>
          </div>
        </div>
    </section>
      )}
  </div>
  );
}
