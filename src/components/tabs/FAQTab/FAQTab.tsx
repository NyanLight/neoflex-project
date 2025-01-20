import { Accordion } from '../../../ui/Accordion';
import { firstSectionProps, secondSectionProps } from './constants';
import styles from './FAQTab.module.css';

export function FAQTab() {
  return (
    <div className={styles.faq}>
      <article className={styles.firstAccordion}>
        <h2 className={styles.title}>Issuing and receiving a card</h2>
        <Accordion data={firstSectionProps} />
      </article>
      <article>
        <h2 className={styles.title}>Using a credit card</h2>
        <Accordion data={secondSectionProps} />
      </article>
    </div>
  );
}
