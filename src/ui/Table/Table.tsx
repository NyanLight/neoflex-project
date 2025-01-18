import { useState } from 'react';
import styles from './Table.module.css';

export function Table({
  data,
  headers,
}: {
  headers: Record<string, string>[];
  data: {
    number: number;
    date: string;
    totalPayment: number;
    interestPayment: number;
    debtPayment: number;
    remainingDebt: number;
  }[];
}) {
  const [sort, setSort] = useState({ keyToSort: 'number', direction: 'asc' });

  function handleHeaderClick(header) {
    setSort({
      keyToSort: header.key,
      direction:
        header.key === sort.keyToSort
          ? sort.direction === 'asc'
            ? 'desc'
            : 'asc'
          : 'asc',
    });
  }

  function getSortedArray(array) {
    if (sort.direction === 'asc') {
      return array.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1,
      );
    }
    return array.sort((a, b) =>
      a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1,
    );
  }

  return (
    <table className={styles.table}>
      <thead className={styles.table__headers}>
        <tr>
          {headers.map((header) => (
            <th
              onClick={() => handleHeaderClick(header)}
              key={header.key}
              className={styles.table__header}
            >
              <span>{header.label}</span>
              <span>
                <img
                  className={
                    sort.keyToSort === header.key && sort.direction === 'asc'
                      ? styles.table__desc
                      : styles.table__icon
                  }
                  src="/src/assets/caret.png"
                  alt=""
                />
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {getSortedArray(data).map((row, index: number) => (
          <tr key={index} className={styles.table__regularRow}>
            <td className={styles.table__regularCell}>{row.number}</td>
            <td className={styles.table__regularCell}>{row.date}</td>
            <td className={styles.table__regularCell}>{row.totalPayment}</td>
            <td className={styles.table__regularCell}>{row.interestPayment}</td>
            <td className={styles.table__regularCell}>{row.debtPayment}</td>
            <td className={styles.table__regularCell}>{row.remainingDebt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
