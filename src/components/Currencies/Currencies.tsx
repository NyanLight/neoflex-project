import classes from "./Currencies.module.css";

export function Currencies() {
  return (
    <section className={classes.currencies}>
      <div className={classes.currencies__wrapper}>
        <div className={classes.currencies__leftPart}>
          <h2 className={classes.currencies__title}>Exchange rate in internet bank</h2>
          <div>Currency</div>
          <ul className={classes.currencies__info}>
            <li className={classes.currency}>
              <div className={classes.currency__name}>USD:</div>
              <div className={classes.currency__value}>60.78</div>
            </li>
            <li className={classes.currency}>
              <div className={classes.currency__name}>CNY:</div>
              <div className={classes.currency__value}>9.08</div>
            </li>
            <li className={classes.currency}>
              <div className={classes.currency__name}>CHF:</div>
              <div className={classes.currency__value}>64.78</div>
            </li>
            <li className={classes.currency}>
              <div className={classes.currency__name}>USD:</div>
              <div className={classes.currency__value}>60.78</div>
            </li>
            <li className={classes.currency}>
              <div className={classes.currency__name}>JPY:</div>
              <div className={classes.currency__value}>0.46</div>
            </li>
            <li className={classes.currency}>
              <div className={classes.currency__name}>TRY</div>
              <div className={classes.currency__value}>3.39</div>
            </li>
          </ul>
            <a href="example.com">All courses</a>
        </div>
          <div className={classes.currencies__rightPart}>
            <div className={classes.currencies__update}>Update every 15 minutes, MSC 09.08.2022</div>
            <img className={classes.currencies__icon} src="src/assets/currenciesIcon.svg" alt="" />
          </div>
      </div>
    </section>
  );
}
