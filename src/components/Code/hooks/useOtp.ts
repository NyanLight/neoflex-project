import { ChangeEvent, useEffect, useState } from 'react';

export function useOtp(applicationId: string, answer: null | string) {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [invalid, setInvalid] = useState(false);
  const [isSent, setSent] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  function handleChange(element: ChangeEvent<HTMLInputElement>, index: number) {
    if (isNaN(Number(element.target.value))) return;
    setOtp([
      ...otp.map((data, i) => (index === i ? element.target.value : data)),
    ]);

    if (element.target.value && element.target.nextSibling) {
      (element.target.nextSibling as HTMLElement)?.focus();
    }
  }

  useEffect(() => {
    const filledFields = otp.filter((value) => {
      return value != '';
    });
    if (filledFields.length === 4 && otp.join('') != answer) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [answer, otp]);

  useEffect(() => {
    const joined = otp.join('');
    if (joined === answer) {
      const sendCode = async () => {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8080/document/${applicationId}/sign/code`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: joined,
          },
        );
        if (response.ok) {
          setSent(true);
          localStorage.removeItem('auth');
          localStorage.removeItem('offer-sent');
          setLoading(false);
        }
      };
      sendCode();
    }
  }, [otp, answer, applicationId]);

  return { otp, invalid, isSent, handleChange, isLoading};
}
