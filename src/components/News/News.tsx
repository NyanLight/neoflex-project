import React, { useState, useEffect, useRef } from 'react';
import classes from './News.module.css';

type NewsItem = {
  urlToImage: string;
  title: string;
  url: string;
  description: string;
};
const API_URL =
  'https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=30&apiKey=4863859a0f68481a8e219d9f84b76c12';

const useFetchNews = (url: string) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
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
        setNews(filteredNews);
      } catch (error) {
        console.error('Ошибка при загрузке новостей:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [url]);

  return { news, loading };
};

const useSlider = (itemsLength: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const visibleItems = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--items-visible',
        ),
      );
      const gap = parseFloat(
        getComputedStyle(sliderRef.current).getPropertyValue('gap'),
      );
      const sliderItemWidth =
        (sliderWidth - gap * (visibleItems - 1)) / visibleItems;

      Array.from(sliderRef.current.children).forEach((child) => {
        (child as HTMLElement).style.width = `${sliderItemWidth}px`;
      });

      sliderRef.current.style.transform = `translateX(-${currentIndex * (sliderItemWidth + gap)}px)`;
    }
  };

  useEffect(() => {
    updateSliderPosition();
  }, [currentIndex, itemsLength]);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    const visibleItems = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--items-visible',
      ),
    );
    if (currentIndex < itemsLength - visibleItems) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return {
    sliderRef,
    currentIndex,
    handlePrev,
    handleNext,
    updateSliderPosition,
  };
};

export const News: React.FC = () => {
  const { news, loading } = useFetchNews(API_URL);
  const { sliderRef, currentIndex, handlePrev, handleNext } = useSlider(
    news.length,
  );

  if (loading) {
    return <div>Loading news...</div>;
  }

  if (news.length === 0) {
    return <div>No news available at the moment.</div>;
  }

  return (
    <section className={classes.news}>
      <h2>Current news from the world of finance</h2>
      <div>
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </div>
      <div className={classes.slider__container}>
        <div className={classes.slider__wrapper}>
          <div ref={sliderRef} className={classes.slider}>
            {news.map((item, index) => (
              <div className={classes.slider__item} key={index}>
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  onError={(e) =>
                    (e.currentTarget.src =
                      'https://via.placeholder.com/300x200?text=No+Image')
                  }
                />
                <h3 className={classes.slider__title}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h3>
                <p className={classes.slider__description}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.buttons}>
          <button
            className={`${classes.slider__btn} ${classes.previous}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          ></button>
          <button
            className={classes.slider__btn}
            onClick={handleNext}
            disabled={
              currentIndex >=
              news.length -
                parseFloat(
                  getComputedStyle(document.documentElement).getPropertyValue(
                    '--items-visible',
                  ),
                )
            }
          ></button>
        </div>
      </div>
    </section>
  );
};
