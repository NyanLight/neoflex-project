import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { FAQTab } from '../FAQTab';
import { firstSectionProps, secondSectionProps } from '../constants';

describe('FAQTab', () => {
  afterEach(cleanup);

  it('renders FAQTab with two sections and correct titles', () => {
    render(<FAQTab />);

    expect(
      screen.getByText(/Issuing and receiving a card/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Using a credit card/i)).toBeInTheDocument();
  });

  it('should toggle the visibility of the accordion content when clicked', () => {
    render(<FAQTab />);

    const firstAccordionHeader = screen.getByText(/How to get a card?/i);
    const secondAccordionHeader = screen.getByText(
      /What is an interest free credit card?/i,
    );

    const firstContent = screen.getByText(
      /We will deliver your card by courier free of charge./i,
    );
    const secondContent = screen.getByText(
      /A credit card with a grace period is a bank card with an established credit limit/i,
    );
    expect(firstContent).toHaveClass('_description__closed_4be6f8');
    expect(secondContent).toHaveClass('_description__closed_4be6f8');

    fireEvent.click(firstAccordionHeader);
    expect(firstContent).not.toHaveClass('_description__closed_4be6f8');
    expect(secondContent).toHaveClass('_description__closed_4be6f8');

    fireEvent.click(firstAccordionHeader);
    expect(firstContent).toHaveClass('_description__closed_4be6f8');
    expect(secondContent).toHaveClass('_description__closed_4be6f8');

    fireEvent.click(secondAccordionHeader);
    expect(firstContent).toHaveClass('_description__closed_4be6f8');
    expect(secondContent).not.toHaveClass('_description__closed_4be6f8');
  });

  it('renders correct content for each section', () => {
    render(<FAQTab />);

    firstSectionProps.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });

    secondSectionProps.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });
});
