import { Button } from '../../ui/Button/Button';
import classes from './Design.module.css';

const images: string[] = [
  'src/assets/card1.png',
  'src/assets/card2.png',
  'src/assets/card3.png',
  'src/assets/card4.png',
];

export function Design() {
  return (
    <section className={classes.design}>
      <div className={classes.design__choice}>
        <h1>Choose the design you like and apply for card right now</h1>
        <Button text="Choose the card" padding={16} />
      </div>
      <div className={classes.design__cards}>
        {images.map((src, index) => {
          return (
            <img
              src={src}
              alt=""
              key={index}
              className={classes.design__card}
            />
          );
        })}
      </div>
    </section>
  );
}
