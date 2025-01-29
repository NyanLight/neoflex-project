import { cleanup, render, screen,  } from '@testing-library/react';
import { it, describe, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Offers } from '../Offers';
import { OfferData } from '../../../types/OfferData.type';

describe('Offers Component', () => {

    afterEach(cleanup);

    it('renders offers correctly', () => {
      const mockOffers: OfferData[] = [
        {
          applicationId: 123,
          totalAmount: 5000,
          isInsuranceEnabled: true,
          isSalaryClient: false,
          monthlyPayment: 200,
          requestedAmount: 5000,
          term: 24,
          rate: 5,
        },
      ];
  
      render(<Offers offers={mockOffers} />);
      expect(screen.getByText(/24/i)).toBeInTheDocument();
    });
  
    it('renders message when offer is sent', () => {
      localStorage.setItem('offer-sent', 'true');
      render(<Offers offers={[]} />);
      expect(screen.getByText(/the preliminary decision has been sent/i)).toBeInTheDocument();
      localStorage.removeItem('offer-sent');
    });
  
    it('renders empty state when no offers available', () => {
      render(<Offers offers={[]} />);
      expect(screen.queryByText(/amount/i)).not.toBeInTheDocument();
    });
  });
  