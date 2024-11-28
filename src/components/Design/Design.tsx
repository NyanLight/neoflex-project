import { Button } from "../../ui/Button/Button";
import classes from "./Design.module.css";

export function Design() {
  return (
    <section className={classes.design}>
      <div className={classes.design__choice}>
        <h1>Choose the design you like and apply for card right now</h1>
        <Button text="Choose the card" padding={16} />
      </div>
      <div className={classes.design__cards}>
        <img className={classes.design__card} src="src/assets/card1.png" />
        <img className={classes.design__card} src="src/assets/card2.png" />
        <img className={classes.design__card} src="src/assets/card3.png" />
        <img className={classes.design__card} src="src/assets/card4.png" />
      </div>
    </section>
  );
}
