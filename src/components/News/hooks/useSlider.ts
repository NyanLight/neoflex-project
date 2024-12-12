import { useState, useEffect, useRef } from 'react';

export const useSlider = (itemsLength: number) => {
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

  const handleResize = () => {
    updateSliderPosition();
  };

  useEffect(() => {
    updateSliderPosition();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
