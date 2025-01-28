import { it, expect, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Footer } from '../Footer';
import '@testing-library/jest-dom/vitest';
import { links } from '../constants';

describe('Footer', () => {
  afterEach(cleanup);
  it('renders contact information', () => {
    render(<Footer />);
    const phoneLink = screen.getByRole('link', {
      name: /\+7 \(495\) 984 25 13/i,
    });
    const emailLink = screen.getByRole('link', { name: /info@neoflex.ru/i });

    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+74959842513');

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:info@neoflex.ru');
  });

it('renders navigation links from the links array', () => {
  render(<Footer />);
  links.forEach((link) => {
    const navLink = screen.getByRole('link', { name: link.name });
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveAttribute('href', link.url);
  });
});
  it('renders the logo', () => {
    render(<Footer />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/src/assets/Logo.svg');
  });
});
