import { cleanup, render, screen } from '@testing-library/react';
import { vi, describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { NotFound } from '../NotFound';
import { MemoryRouter } from 'react-router';



describe('NotFound Component', () => {
    afterEach(cleanup);

    it('renders the not found page correctly', () => {
      render(
        <MemoryRouter>
            <NotFound />
        </MemoryRouter>
    );
      expect(screen.getByText(/oops/i)).toBeInTheDocument();
      expect(screen.getByText(/page not found/i)).toBeInTheDocument();
      expect(screen.getByText(/this page doesn't exist or was removed/i)).toBeInTheDocument();
    });
  
    it('renders the back button', () => {
      render(
        <MemoryRouter>
            <NotFound />
        </MemoryRouter>
    );
      expect(screen.getAllByText(/go back/i)[1]).toBeInTheDocument();
    });
  
    it('renders the 404 image', () => {
      render(
        <MemoryRouter>
        <NotFound />
    </MemoryRouter>
    );
      expect(screen.getByAltText('')).toBeInTheDocument();
    });
  });
  