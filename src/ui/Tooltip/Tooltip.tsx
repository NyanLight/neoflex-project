import React from 'react';
import styles from './Tooltip.module.css';

export function Tooltip({
  text,
  children,
}: {
  text: string;
  children: React.ReactElement;
}) {
  return (
    <div className={styles.tooltip__container}>
      <div className={styles.tooltip__children}>
        {children}
        <div className={styles.tooltip__text}>{text}</div>
      </div>
    </div>
  );
}
