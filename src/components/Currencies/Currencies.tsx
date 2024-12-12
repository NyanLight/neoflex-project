import { useState, useEffect } from 'react';
import classes from './Currencies.module.css';
import { FIFTEEN_MINUTES } from './constants';
import { fetchCurrencies } from '../../api/fetchCurrencies.api';
import { Currency } from '../../types/Currency.type';

export function Currencies() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const updateCurrencies = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const updatedCurrencies = await fetchCurrencies();
      if (updatedCurrencies) {
        setCurrencies(updatedCurrencies);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updateCurrencies();
    const intervalId = setInterval(updateCurrencies, FIFTEEN_MINUTES);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={classes.currencies}>
      <div className={classes.currencies__wrapper}>
        <div className={classes.currencies__leftPart}>
          <h2 className={classes.currencies__title}>
            Exchange rate in internet bank
          </h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className={classes.error}>{error}</p>
          ) : (
            <ul className={classes.currencies__info}>
              {currencies.map((currency) => (
                <li key={currency.id} className={classes.currency}>
                  <div className={classes.currency__name}>{currency.name}:</div>
                  <div className={classes.currency__value}>
                    {currency.value}
                  </div>
                </li>
              ))}
            </ul>
          )}
          <a href="example.com">All courses</a>
        </div>
        <div className={classes.currencies__rightPart}>
          <div className={classes.currencies__update}>
            Update every 15 minutes, MSC 09.08.2022
          </div>
          <img
            className={classes.currencies__icon}
            src="src/assets/currenciesIcon.svg"
            alt="Currencies Icon"
          />
        </div>
      </div>
    </section>
  );
}
