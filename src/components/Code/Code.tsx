import { useParams, useNavigate } from 'react-router';
import { Button } from '../../ui/Button';
import styles from './Code.module.css';
import { useFetchCode } from './hooks/useFetchCode';
import { useOtp } from './hooks/useOtp';
import { Loader } from '../../ui/Loader';

export function Code() {
  const { applicationId } = useParams();
  const navigate = useNavigate();
  const { answer } = useFetchCode(applicationId ?? '');
  const { otp, invalid, isSent, handleChange, isLoading } = useOtp(
    applicationId ?? '',
    answer,
  );

  const handleCongratulationsBtn = () => {
    navigate('/');
  };

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
              handler={handleCongratulationsBtn}
              verticalPadding="1rem"
              horizontalPadding="1rem"
              borderRadius="16px"
            />
          </div>
        </div>
      ) : (
        <section className={styles.code}>
          {isLoading ? (
            <div className={styles.loader}>
              <Loader isDisplaying={true} />
            </div>
          ) : (
            <div className={styles.wrapper}>
              <Loader isDisplaying={false} />
              <h2 className={styles.title}>Please enter confirmation code</h2>
              <div className={styles.otp}>
                <div className={styles.otp__fields}>
                  {otp.map((data, index) => (
                    <input
                      value={data}
                      key={index}
                      onChange={(element) => handleChange(element, index)}
                      className={
                        data == ''
                          ? styles.input
                          : `${styles.input} ${styles.input__filled}`
                      }
                      maxLength={1}
                      type="text"
                    />
                  ))}
                </div>
                <div className={invalid ? styles.otp__error : styles.hidden}>
                  Invalid confirmation code
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
