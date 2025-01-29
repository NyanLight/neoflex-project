import { cleanup, render, screen, waitFor,  } from '@testing-library/react';
import { it, describe, expect, afterEach } from 'vitest';
import { Features } from '../Features';
import { liContent } from '../constants';
import '@testing-library/jest-dom/vitest';

describe('Features Component', () => {
    afterEach(cleanup);

  it('renders the title and description', () => {
    render(<Features />);

    expect(
      screen.getByText(/we provide many features you can use/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/you can explore the features that we provide with fun/i)
    ).toBeInTheDocument();
  });

  it('renders the list of features', () => {
    render(<Features />);
    
    liContent.forEach((li) => {
      expect(screen.getByText(li.text)).toBeInTheDocument();
    });
  });

  it('renders images correctly', () => {
    render(<Features />);

    waitFor (() => expect(screen.getAllByAltText('Checked icon')).toBeInTheDocument() );
  });
});
