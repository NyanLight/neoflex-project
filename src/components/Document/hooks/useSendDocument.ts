import { useState } from 'react';
import { sendDocument } from '../../../api/sendDocument.api';
import { useAuthStore } from '../../../store';

export function useSendDocument(applicationId: string) {
  const [documentSent, setDocumentSent] = useState<boolean>(false);
  const handleSend = async () => {
    if (applicationId)
      try {
        sendDocument(applicationId);
        setDocumentSent(true);
        useAuthStore.getState().setStep(4);
      } catch (error) {
        console.error(error);
      }
  };

  return { documentSent, handleSend };
}
