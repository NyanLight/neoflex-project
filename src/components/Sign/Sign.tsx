import { Checkbox } from '../../ui/Checkbox';
import styles from './Sign.module.css';
import { useState } from 'react';

export function Sign() {
  const [isSent, setSend] = useState<boolean>(false);

  return (
    <section className={styles.sign}>
      {isSent ? (
        <div className={styles.sentDiv}>
          <div className={styles.sentDiv__title}>
            Documents have been successfully signed and sent for approval
          </div>
          <div className={styles.sentDiv__regular}>
            Within 10 minutes you will be sent a PIN code to your email for
            confirmation
          </div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.topPart}>
            <div className={styles.title}>Signing of documents</div>
            <div className={styles.step}>Step 4 of 5</div>
          </div>
          <div className={styles.regular}>
            Information on interest rates under bank deposit agreements with
            individuals. Center for Corporate Information Disclosure.
            Information of a professional participant in the securities market.
            Information about persons under whose control or significant
            influence the Partner Banks are. By leaving an application, you
            agree to the processing of personal data, obtaining information,
            obtaining access to a credit history, using an analogue of a
            handwritten signature, an offer, a policy regarding the processing
            of personal data, a form of consent to the processing of personal
            data.
          </div>
          <div className={styles.pdf}>
            <img
              className={styles.pdf__icon}
              src="/src/assets/pdf.svg"
              alt="PDF document"
            />
            <div className={styles.pdf__description}>
              Information on your card
            </div>
          </div>
          <div className={styles.checkbox}>
            <Checkbox
              text="Send"
              label="I agree"
              gap="5rem"
              borderRadius="8px"
              verticalPadding="0.75rem"
              horizontalPadding="1.75rem"
              handler={() => setSend(true)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
