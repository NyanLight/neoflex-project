import { useState } from 'react';
import { denyApplication } from '../../../api/denyApplication.api';

export function useDenyApplication(applicationId: string) {
  const [denySent, setDenySent] = useState<boolean>(false);

  const handleDeny = async () => {
    if (applicationId)
      try {
        await denyApplication(applicationId);
        setDenySent(true);
        localStorage.removeItem('auth');
        localStorage.removeItem('offer-sent');
      } catch (error) {
        console.error(error);
      }
  };

  return { denySent, handleDeny };
}
