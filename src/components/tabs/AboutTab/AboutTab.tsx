import styles from './AboutTab.module.css';
import { AboutCard } from './components/AboutCard';
import { cardsData } from './constants';


export function AboutTab() {
  return <div className={styles.cards}>
    {cardsData.map((card, index) => (
        <AboutCard icon={card.icon} title={card.title} description={card.description} color={(index % 2 === 0)? "#EAECEE" : "#7f92accb"} />
    ))}
  </div>;
}
