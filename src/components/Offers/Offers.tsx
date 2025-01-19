import { Offer } from './components/Offer';
import { useState } from 'react';
import styles from './Offers.module.css';
import { OfferData } from '../../types/OfferData.type';
import { useAuthStore } from '../../store';

export function Offers({ offers }: { offers: OfferData[] }) {
  const [isSent, setSend] = useState<boolean>(false);
  async function handleSending(selectedOffer: OfferData) {
    const response = await fetch('http://localhost:8080/application/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedOffer),
    });
    if (response.ok) {
        setSend(true)
        useAuthStore.getState().setStep(2);
      };
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
            handler={() => handleSending(offer)}
          />
        ))
      )}
    </section>
  );
}
