import classes from './News.module.css';
import { useSlider } from './hooks/useSlider';
import { useFetchNews } from './hooks/useFetchNews';

export const News: React.FC = () => {
  const { news, loading } = useFetchNews();
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
