import { Button } from "../../ui/Button/Button";
import classes from "./Cards.module.css";

export function Cards() {
  return (
    <section>
      <div>
        <h1>Choose the design you like and apply for card right now</h1>
        <Button text="Choose the card" padding={8} />
      </div>
      <div className={classes.cards}>
        <img className={classes.card} src="src/assets/card1.png" />
        <img className={classes.card} src="src/assets/card2.png" />
        <img className={classes.card} src="src/assets/card3.png" />
        <img className={classes.card} src="src/assets/card4.png" />
      </div>
    </section>
  );
}
