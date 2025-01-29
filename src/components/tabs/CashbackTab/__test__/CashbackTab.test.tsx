import { cleanup, render, screen } from '@testing-library/react';
import { describe, expect, it, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { CashbackTab } from '../CashbackTab';

const mockCards = [
  { title: 'Cashback Card 1', description: 'Description for card 1' },
  { title: 'Cashback Card 2', description: 'Description for card 2' },
];

describe('CashbackTab', () => {
  afterEach(cleanup);

  it('should render all cashback cards with titles and descriptions', () => {
    render(<CashbackTab cards={mockCards} />);

    expect(screen.getByText('Cashback Card 1')).toBeInTheDocument();
    expect(screen.getByText('Description for card 1')).toBeInTheDocument();
    expect(screen.getByText('Cashback Card 2')).toBeInTheDocument();
    expect(screen.getByText('Description for card 2')).toBeInTheDocument();
  });

  it('should apply correct background color for alternating cards', () => {
    render(<CashbackTab cards={mockCards} />);

    const firstCard = screen.getAllByTestId('card')[0];
    expect(firstCard).toHaveStyle('background-color: rgba(234, 236, 238, 1)');

    const secondCard = screen.getAllByTestId('card')[1];
    expect(secondCard).toHaveStyle(
      'background-color: rgba(136, 179, 184, 0.6)',
    );
  });

  it('should render no cards if no data is provided', () => {
    render(<CashbackTab cards={[]} />);
    const cardElements = screen.queryAllByRole('article');
    expect(cardElements).toHaveLength(0);
  });
});
