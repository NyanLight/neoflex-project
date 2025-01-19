import { useParams, useNavigate } from 'react-router';
import { Button } from '../../ui/Button';
import styles from './Code.module.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { fetchCode } from '../../api/fetchCode.api';

export function Code() {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [invalid, setInvalid] = useState(false);
  const [isSent, setSent] = useState<boolean>(false);
  const [answer, setAnswer] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const handleCongratulationsBtn = () => {
    navigate('/');
  };

  useEffect(() => {
    const downloadCode = async () => {
      if (params.applicationId) {
        const fetchedAnswer = await fetchCode(params.applicationId);
        await setAnswer(fetchedAnswer);
      }
    };
    downloadCode();
  }, [params.applicationId]);

  function handleChange(element: ChangeEvent<HTMLInputElement>, index: number) {
    if (isNaN(Number(element.target.value))) return;
    setOtp([
      ...otp.map((data, i) => (index === i ? element.target.value : data)),
    ]);

    if (element.target.value && element.target.nextSibling) {
      (element.target.nextSibling as HTMLElement)?.focus();
    }
  }

  useEffect(() => {
    const filledFields = otp.filter((value) => {
      return value != '';
    });
    if (filledFields.length === 4 && otp.join('') != answer) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [answer, otp]);

  useEffect(() => {
    const joined = otp.join('');
    if (joined === answer) {
      const sendCode = async () => {
        const response = await fetch(
          `http://localhost:8080/document/${params.applicationId}/sign/code`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: joined,
          },
        );
        if (response.ok) {
          setSent(true);
          localStorage.removeItem('auth');
        }
      };
      sendCode();
    }
  }, [otp, answer, params.applicationId]);

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
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Please enter confirmation code</h2>
            <div className={styles.otp}>
              <div className={styles.otp__fields}>
                {otp.map((data, index) => (
                  <input
                    value={data}
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
        </section>
      )}
    </div>
  );
}
