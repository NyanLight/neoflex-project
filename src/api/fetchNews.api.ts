import { NewsItem } from '../types/NewsIte.type';
import { API_URL } from '../components/News/constants';

export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const filteredNews = data.articles
      .filter((article: NewsItem) => {
        const validImage =
          article.urlToImage && article.urlToImage.startsWith('http');
        const validDescription =
          article.description && !/<[^>]*>/.test(article.description);
        return validImage && validDescription;
      })
      .slice(0, 30);

    return filteredNews;
  } catch (error) {
    console.error('Ошибка при загрузке новостей:', error);
    return [];
  }
};
