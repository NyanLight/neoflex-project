import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Prescoring } from '../Prescoring';

describe('Prescoring Component', () => {
    afterEach(cleanup);

    it('renders the form correctly', () => {
      render(<Prescoring />);
      expect(screen.getByText(/customize your card/i)).toBeInTheDocument();
    });
    it('updates the amount input correctly', () => {
      render(<Prescoring />);
      const input = screen.getByRole('slider');
      fireEvent.change(input, { target: { value: '30000' } });
      expect(screen.getAllByText(/30 000/i)[0]).toBeInTheDocument();
    });
    it('should display loader when form is submitting', () => {
        render(<Prescoring />);
        const loader = screen.getAllByTestId('loader')[0];
        expect(loader).toBeInTheDocument();
      });
  });
  