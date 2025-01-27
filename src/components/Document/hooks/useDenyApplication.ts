import { useState } from 'react';
import { denyApplication } from '../../../api/denyApplication.api';
import { clearCache } from '../../../utils';

export function useDenyApplication(applicationId: string) {
  const [denySent, setDenySent] = useState<boolean>(false);

  const handleDeny = async () => {
    if (applicationId)
      try {
        await denyApplication(applicationId);
        setDenySent(true);
        clearCache();
      } catch (error) {
        console.error(error);
      }
  };

  return { denySent, handleDeny };
}
