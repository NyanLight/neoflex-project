import { useState } from 'react';
import { sendSign } from '../../../api/sendSign.api';
import { useAuthStore } from '../../../store';

export function useSendSign(applicationId: string) {
  const [isSent, setSend] = useState<boolean>(false);

  const handleSign = async () => {
    if (applicationId)
      try {
        await sendSign(applicationId);
        setSend(true);
        useAuthStore.getState().setStep(5);
      } catch (error) {
        console.error(error);
      }
  };

  return { isSent, handleSign };
}
