import { TableRow } from '../../ui/Table/types/TableRow.type';

export const headers: { label: string; key: keyof TableRow }[] = [
  { label: 'NUMBER', key: 'number' },
  { label: 'DATE', key: 'date' },
  { label: 'TOTAL PAYMENT', key: 'totalPayment' },
  { label: 'INTEREST PAYMENT', key: 'interestPayment' },
  { label: 'DEBT PAYMENT', key: 'debtPayment' },
  { label: 'REMAINING DEBT', key: 'remainingDebt' },
];

export const data = [
  {
    number: 0,
    date: '2025-01-17',
    totalPayment: 0,
    interestPayment: 0,
    debtPayment: 0,
    remainingDebt: 108000.0,
  },
  {
    number: 1,
    date: '2025-02-17',
    totalPayment: 18420.04,
    interestPayment: 720.01,
    debtPayment: 17700.03,
    remainingDebt: 90299.97,
  },
  {
    number: 2,
    date: '2025-03-17',
    totalPayment: 18420.04,
    interestPayment: 602.0,
    debtPayment: 17818.04,
    remainingDebt: 72481.93,
  },
  {
    number: 3,
    date: '2025-04-17',
    totalPayment: 18420.04,
    interestPayment: 483.22,
    debtPayment: 17936.82,
    remainingDebt: 54545.11,
  },
  {
    number: 4,
    date: '2025-05-17',
    totalPayment: 18420.04,
    interestPayment: 363.64,
    debtPayment: 18056.4,
    remainingDebt: 36488.71,
  },
  {
    number: 5,
    date: '2025-06-17',
    totalPayment: 18420.04,
    interestPayment: 243.26,
    debtPayment: 18176.78,
    remainingDebt: 18311.93,
  },
  {
    number: 6,
    date: '2025-07-17',
    totalPayment: 18420.04,
    interestPayment: 122.08,
    debtPayment: 18297.96,
    remainingDebt: 13.97,
  },
];
