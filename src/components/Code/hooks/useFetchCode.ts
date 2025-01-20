import { useEffect, useState } from 'react';
import { fetchCode } from '../../../api/fetchCode.api';

export function useFetchCode(applicationId: string) {
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const downloadCode = async () => {
      if (applicationId)
        try {
          const fetchedAnswer = await fetchCode(applicationId);
          await setAnswer(fetchedAnswer);
        } catch (error) {
          console.error(error);
        }
    };
    downloadCode();
  }, [applicationId]);

  return { answer };
}
