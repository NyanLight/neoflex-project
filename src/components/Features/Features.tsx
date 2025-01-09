import { liContent } from './constants';
import classes from './Features.module.css';

export function Features() {
  return (
    <section className={classes.features}>
      <img src="src/assets/guy.png" className={classes.features__guy} />
      <div className={classes.features__descriptionPart}>
        <h2 className={classes.features__title}>
          We Provide Many Features You Can Use
        </h2>
        <div>
          You can explore the features that we provide with fun and have their
          own functions each feature
        </div>
        <ul>
          {liContent.map((li) => (
            <li className={classes.features__checkedLi} key={li.key}>
              <img src="src/assets/check.png" alt="Checked icon" />
              <div>{li.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
