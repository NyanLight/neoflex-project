import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Platinum } from '../Platinum';
import { features } from '../constants';
import { MemoryRouter } from 'react-router';

describe('Platinum Component', () => {
  afterEach(cleanup);

  it('renders the title and description', () => {
    render(
      <MemoryRouter>
        <Platinum />
      </MemoryRouter>,
    );
    expect(
      screen.getByText(/platinum digital credit card/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/our best credit card/i)).toBeInTheDocument();
  });

  it('renders the features list', () => {
    render(
      <MemoryRouter>
        <Platinum />
      </MemoryRouter>,
    );
    features.forEach((feature) => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
    });
  });

  it('renders the button with correct text', () => {
    render(
      <MemoryRouter>
        <Platinum />
      </MemoryRouter>,
    );
    expect(
      screen.getByText(/apply for card|continue registration/i),
    ).toBeInTheDocument();
  });
});
