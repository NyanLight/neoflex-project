import { useState } from 'react';

export function useSubscribe() {
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch('http://localhost:8080/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setError(null);
        return true;
      } else {
        const { message } = await response.json();
        setError(message || 'Failed to subscribe.');
        return false;
      }
    } catch (err) {
      console.error('Error subscribing:', err);
      setError('An error occurred. Please try again later.');
      return false;
    }
  };

  return { subscribe, error };
}
