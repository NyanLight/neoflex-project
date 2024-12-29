import { Button } from '../../ui/Button/Button';
import { cards } from './constants';
import classes from './Design.module.css';


export function Design() {
  return (
    <section className={classes.design}>
      <div className={classes.design__choice}>
        <h1>Choose the design you like and apply for card right now</h1>
        <Button text="Choose the card" verticalPadding={'1rem'} horizontalPadding={"1rem"} borderRadius='16px' handler={() => {return}} />
      </div>
      <div className={classes.design__cards}>
        {cards.map((card) => (
          <img src={card.src} alt="" key={card.key} />
        ))}
      </div>
    </section>
  );
}
