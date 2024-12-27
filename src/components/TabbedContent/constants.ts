import { ConditionsProps } from "../tabs/ConditionsTab/types/Condition.type";

export const titles = ['About card', 'Rates and conditions', 'Cashback', 'FAQ'];

export const conditionsData: ConditionsProps = [
    {
      title: 'Card currency',
      description: 'Rubles, dollars, euro',
    },
    {
      title: 'Interest free period',
      description: '0% up to 160 days',
    },
    {
      title: 'Payment system',
      description: 'Mastercard, Visa',
    },
    {
      title: 'Maximum credit limit on the card',
      description: '600 000 ₽',
    },
    {
      title: 'Replenishment and withdrawal',
      description:
        'At any ATM. Top up your credit card for free with cash or transfer from other cards',
    },
    {
      title: 'Max cashback per month',
      description: '15 000 ₽',
    },
    {
      title: 'Transaction Alert',
      description:
        `60 ₽ — SMS or push notifications`,
        secondDescription: '0 ₽ — card statement, information about transactions in the online bank'
    },
  ];
