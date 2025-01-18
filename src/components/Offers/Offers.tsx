import { Offer } from './components/Offer';
import { useState } from 'react';
import styles from './Offers.module.css';
import { OfferData } from '../../types/OfferData.type';

export function Offers({ offers }: { offers: OfferData[] }) {
  const [isSent, setSend] = useState<boolean>(false);
  function handleSending() {
    setSend(true);
  }

  return (
    <section className={styles.offers}>
      {isSent || localStorage.getItem('offer-sent') ? (
        <div className={styles.sentDiv}>
          <div className={styles.sentDiv__title}>
            The preliminary decision has been sent to your email.
          </div>
          <div className={styles.sentDiv__regular}>
            In the letter you can get acquainted with the preliminary decision
            on the credit card.
          </div>
        </div>
      ) : (
        offers &&
        offers.map((offer, index) => (
          <Offer
            key={index}
            applicationId={offer.applicationId}
            totalAmount={offer.totalAmount}
            isInsuranceEnabled={offer.isInsuranceEnabled}
            isSalaryClient={offer.isSalaryClient}
            monthlyPayment={offer.monthlyPayment}
            requestedAmount={offer.requestedAmount}
            term={offer.term}
            rate={offer.rate}
            setSend={handleSending}
          />
        ))
      )}
    </section>
  );
}
