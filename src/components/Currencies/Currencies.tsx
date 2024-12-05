import classes from './Currencies.module.css';

const currencies = [
  { key: 0, name: 'USD', value: 60.78 },
  { key: 1, name: 'CNY', value: 9.08 },
  { key: 2, name: 'CHF', value: 64.78 },
  { key: 3, name: 'USD', value: 60.78 },
  { key: 4, name: 'JPY', value: 0.46 },
  { key: 5, name: 'TRY', value: 3.39 },
];

export function Currencies() {
  return (
    <section className={classes.currencies}>
      <div className={classes.currencies__wrapper}>
        <div className={classes.currencies__leftPart}>
          <h2 className={classes.currencies__title}>
            Exchange rate in internet bank
          </h2>
          <div>Currency</div>
          <ul className={classes.currencies__info}>
            {currencies.map((currency) => (
              <li key={currency.key} className={classes.currency}>
                <div className={classes.currency__name}>{currency.name}:</div>
                <div className={classes.currency__value}>{currency.value}</div>
              </li>
            ))}
          </ul>
          <a href="example.com">All courses</a>
        </div>
        <div className={classes.currencies__rightPart}>
          <div className={classes.currencies__update}>
            Update every 15 minutes, MSC 09.08.2022
          </div>
          <img
            className={classes.currencies__icon}
            src="src/assets/currenciesIcon.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
