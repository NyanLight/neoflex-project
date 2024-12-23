export const checkSubscriptionStatus = (): boolean => {
    return localStorage.getItem('isSubscribed') === 'true';
  };
  
  export const saveSubscriptionStatus = (status: boolean): void => {
    localStorage.setItem('isSubscribed', status.toString());
  };
  