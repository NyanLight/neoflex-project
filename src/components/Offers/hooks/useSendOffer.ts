import { useState } from "react";
import { OfferData } from "../../../types/OfferData.type";
import { useAuthStore } from "../../../store";

export function useSendOffer () {
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
          setSend(true);
          useAuthStore.getState().setStep(2);
          localStorage.removeItem('offer-sent');
          localStorage.removeItem('offer-storage');
        }
      }

      return {isSent, handleSending};
}
