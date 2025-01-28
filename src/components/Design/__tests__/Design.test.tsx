import { cleanup, render, screen } from '@testing-library/react';
import { it, expect, describe, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Design } from '../Design';
import { cards } from '../constants';

describe('Design Component', () => {
  afterEach(cleanup);
  it('renders the title correctly', () => {
    render(<Design />);

    expect(
      screen.getByText(/choose the design you like and apply for card right now/i)
    ).toBeInTheDocument();
  });

  it('renders the button with correct text and styles', () => {
    render(<Design />);

    const button = screen.getByRole('button', { name: /choose the card/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      padding: '1rem 1rem',
      borderRadius: '16px',
    });
  });

  it('renders the correct number of card images', () => {
    render(<Design />);
    const images = screen.getAllByTestId('img');
    expect(images).toHaveLength(cards.length);
  });
});
