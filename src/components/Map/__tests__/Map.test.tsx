import { cleanup, render, screen } from '@testing-library/react';
import { Map } from '../Map';
import { it, describe, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';


describe('Map', () => {
    afterEach(cleanup);

  it('should render the correct heading', () => {
    render(<Map />);
    const heading = screen.getByRole('heading', { name: /You can use our services anywhere in the world/i });
    expect(heading).toBeInTheDocument();
  });

  it('should render the description correctly', () => {
    render(<Map />);
    const description = screen.getByText(/Withdraw and transfer money online through our application/i);
    expect(description).toBeInTheDocument();
  });

  it('should render the map image with correct src attribute', () => {
    render(<Map />);
    const mapImage = screen.getByRole('img');
    expect(mapImage).toHaveAttribute('src', 'src/assets/map.png');
  });
});