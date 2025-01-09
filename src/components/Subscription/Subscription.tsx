import { useState, useEffect } from 'react';
import classes from './Subscription.module.css';
import {
  checkSubscriptionStatus,
  saveSubscriptionStatus,
} from './utils/subscriptionStorage';
import { useSubscribe } from './hooks/useSubscribe';

export function Subscription() {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const { subscribe } = useSubscribe();

  useEffect(() => {
    const subscriptionStatus = checkSubscriptionStatus();
    setIsSubscribed(subscriptionStatus);
  }, []);

  const handleSubscribe = async () => {
    if (!email) {
      alert('Пожалуйста, введите ваш email');
      return;
    }

    const success = await subscribe(email);
    if (success) {
      saveSubscriptionStatus(true);
      setIsSubscribed(true);
    }
  };

  return (
    <section className={classes.subscription}>
      <div className={classes.subscription__support}>Support</div>
      <h2 className={classes.subscription__title__bold}>
        Subscribe Newsletter & get
      </h2>
      <h2 className={classes.subscription__title}>Bank News</h2>
      {isSubscribed ? (
        <h3 className={classes.subscription__subscribed}>
          You are already subscribed to the bank's newsletter!
        </h3>
      ) : (
        <div className={classes.inputField}>
          <div>
            <img
              src="src/assets/email.svg"
              className={classes.inputField__icon}
              alt="Email icon"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              className={classes.subscription__btn}
              type="button"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
