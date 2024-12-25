import styles from './AboutTab.module.css';
import { cardData } from './AboutTab.type';
import { AboutCard } from './components/AboutCard';


const cardsData: cardData[] = [
  {
    icon: 'src/assets/money.svg',    
    title: 'Up to 50 000 ₽',
    description: 'Cash and transfers without commission and percent',
  },
  {
    icon: 'src/assets/calendar.svg',
    title: 'Up to 160 days',
    description: 'Without percent on the loan',
  },
  {
    icon: 'src/assets/clock.svg',
    title: 'Free delivery',
    description:
      'We will deliver your card by courier at a convenient place and time for you',
  },
  {
    icon: 'src/assets/bag.svg',
    title: 'Up to 12 months',
    description:
      'No percent. For equipment, clothes and other purchases in installments',
  },
  {
    icon: 'src/assets/credit_card.svg',
    title: 'Convenient deposit and withdrawal',
    description:
      'At any ATM. Top up your credit card for free with cash or transfer from other cards',
  }
];

export function AboutTab() {
  return <div className={styles.cards}>
    {cardsData.map((card, index) => (
        <AboutCard icon={card.icon} title={card.title} description={card.description} color={(index % 2 === 0)? "#EAECEE" : "#7f92accb"} />
    ))}
  </div>;
}
