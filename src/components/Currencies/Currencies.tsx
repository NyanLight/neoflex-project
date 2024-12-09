import { useState, useEffect } from 'react';
import classes from './Currencies.module.css';

export function Currencies() {
  type Currency = {
    id: number;
    name: string;
    value: number;
  };

  const FIFTEEN_MINUTES = 900000;
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrencies = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      setError('Failed to load exchange rates');
      return null;
    }
  };

  const updateCurrencies = async () => {
    setIsLoading(true);
    setError(null);

    const apiData = await fetchCurrencies(
      'https://v6.exchangerate-api.com/v6/8c84b2d9d3989af4f2109895/latest/RUB',
    );

    if (apiData) {
      const updatedCurrencies: Currency[] = [
        'USD',
        'EUR',
        'CAD',
        'CNY',
        'CHF',
        'SGD',
      ].map((currency, index) => ({
        id: index,
        name: currency,
        value: +(1 / apiData.conversion_rates[currency]).toFixed(2),
      }));
      setCurrencies(updatedCurrencies);
    }

    setIsLoading(false);
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
