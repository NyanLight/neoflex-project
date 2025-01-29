import { cleanup, render, screen } from '@testing-library/react';
import { describe, expect, it, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { AboutTab } from '../AboutTab';
import { cardsData } from '../constants';

describe('AboutTab', () => {
  afterEach(cleanup);

  describe('AboutTab', () => {
    it('should render the correct number of AboutCard components', () => {
      render(<AboutTab />);

      const aboutCards = screen.getAllByRole('heading');
      expect(aboutCards).toHaveLength(cardsData.length);
    });

    it('should render AboutCard with correct props', () => {
      render(<AboutTab />);

      cardsData.forEach((card) => {
        expect(screen.getByText(card.title)).toBeInTheDocument();
        expect(screen.getByText(card.description)).toBeInTheDocument();
      });
    });

    it('should apply correct background color based on index', () => {
      render(<AboutTab />);

      cardsData.forEach((card, index) => {
        const cardElement = screen.getByText(card.title).parentElement;
        expect(cardElement).toHaveStyle({
          backgroundColor: index % 2 === 0 ? '#EAECEE' : '#7f92accb',
        });
      });
    });
  });
});
