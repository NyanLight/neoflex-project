import { Button } from '../../ui/Button/Button';
import classes from './Design.module.css';

const cards = [
  { key: 0, src: 'src/assets/card1.png' },
  { key: 1, src: 'src/assets/card2.png' },
  { key: 2, src: 'src/assets/card3.png' },
  { key: 3, src: 'src/assets/card4.png' },
];

export function Design() {
  return (
    <section className={classes.design}>
      <div className={classes.design__choice}>
        <h1>Choose the design you like and apply for card right now</h1>
        <Button text="Choose the card" verticalPadding={'1rem'} horizontalPadding={"1rem"} borderRadius='16px'/>
      </div>
      <div className={classes.design__cards}>
        {cards.map((card) => (
          <img src={card.src} alt="" key={card.key} />
        ))}
      </div>
    </section>
  );
}
