import { it, expect, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/vitest';
import { links } from '../constants';



describe('Header', () => {
  afterEach(cleanup);

  it('should render header component with memory router without crashing', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    screen.debug();
  });
  it('should render the logo with text "NeoBank"', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const logo = screen.getByText('NeoBank');
    expect(logo).toBeInTheDocument();
  });
  it('should render navigation links from the links array', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    links.forEach((link) => {
      const navLink = screen.getByText(link.name);
      expect(navLink).toBeInTheDocument();
      expect(navLink.closest('a')).toHaveAttribute('href', link.url);
    });
  });
});
