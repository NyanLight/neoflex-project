import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Steps } from '../Steps';
import { stepsData } from '../constants';

describe('Steps Component', () => {
    afterEach(cleanup);
    
    it('renders the steps section correctly', () => {
      render(<Steps />);
      expect(screen.getByText(/how to get a card/i)).toBeInTheDocument();
    });
  
    it('renders all steps', () => {
      render(<Steps />);
      stepsData.forEach(step => {
        expect(screen.getByText(step.text)).toBeInTheDocument();
      });
    });
  });
  