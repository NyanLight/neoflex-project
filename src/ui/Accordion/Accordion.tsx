import styles from './Accordion.module.css';
import { AccordionProps } from './types/AccordionProps.type';
import { useState } from 'react';

export function Accordion({data}: {data: AccordionProps}) {

    const [selected, setSelected] = useState<number|null>(null);

    const toggle = (i: number) => {
        if (i === selected) {
            setSelected(null);
        } else {
            setSelected(i);
        }
        

    }

  return (
    <div className={styles.accordion}>
      {data.map((item, index) => (
        <div key={index} className={styles.accordion__item} onClick={() => toggle(index)}>
          <div className={styles.item__title}>
            <h2 className={styles.title__text}>{item.title}</h2>
            <div className={styles.title__icon}><img src="src/assets/accordion_vector.png" className={selected === index ? styles.title__icon : styles.icon__closed} alt="" /></div>
          </div>
          <div className={selected === index ? styles.item__description : styles.description__closed}>{item.description}</div>
        </div>
      ))}
    </div>
  );
}
