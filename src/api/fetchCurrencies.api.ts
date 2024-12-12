import { Currency } from '../types/Currency.type';
import { API_URL } from '../components/Currencies/constants';

export const fetchCurrencies = async (): Promise<Currency[] | null> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const apiData = await response.json();

    const currencies: Currency[] = [
      'USD',
      'EUR',
      'CAD',
      'CNY',
      'CHF',
      'SGD',
    ].map((currency, index) => ({
      id: index,
      name: currency,
      value: +(1 / apiData.conversion_rates[currency]).toFixed(2),
    }));

    return currencies;
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    throw new Error('Failed to load exchange rates');
  }
};
