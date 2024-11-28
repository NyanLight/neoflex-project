import classes from "./Currencies.module.css";

export function Currencies() {
  return (
    <section className={classes.currencies}>
      <div className={classes.currencies__wrapper}>
        <h2>Exchange rate in internet bank</h2>
        <div>Currency</div>
        <div className={classes.currencies__info}>
          <div className={classes.currency}>
            <div className={classes.currency__name}></div>
            <div className={classes.currency__value}></div>
          </div>
          <div className={classes.currency}>
            <div className={classes.currency__name}></div>
            <div className={classes.currency__value}></div>
          </div>
          <div className={classes.currency}>
            <div className={classes.currency__name}></div>
            <div className={classes.currency__value}></div>
          </div>
          <div className={classes.currency}>
            <div className={classes.currency__name}></div>
            <div className={classes.currency__value}></div>
          </div>
          <div className={classes.currency}>
            <div className={classes.currency__name}></div>
            <div className={classes.currency__value}></div>
          </div>
          <div className={classes.currency}>
            <div className={classes.currency__name}></div>
            <div className={classes.currency__value}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
