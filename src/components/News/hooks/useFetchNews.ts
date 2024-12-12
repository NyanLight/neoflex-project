import { useState, useEffect } from 'react';
import { NewsItem } from '../../../types/NewsIte.type';
import { fetchNews } from '../../../api/fetchNews.api';

export const useFetchNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const newsData = await fetchNews();
      setNews(newsData);
      setLoading(false);
    };

    loadNews();
  }, []);

  return { news, loading };
};
