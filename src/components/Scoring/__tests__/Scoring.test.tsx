import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { Scoring } from '../Scoring';
import { it, describe, expect, afterEach } from 'vitest';

describe('Scoring component', () => {
  afterEach(cleanup);


  it('display error if trying submt without filling required fields', async () => {
    render(<Scoring />);
    const submitButton = screen.getByText(/continue/i);
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getAllByText(/Field is required/i)[0]).toBeInTheDocument();
    });
  });

  it('renders the form correctly', () => {
    render(<Scoring />);
    expect(
      screen.getByText(/continuation of the application/i),
    ).toBeInTheDocument();
  });

  it('should show loader when form is submitting', () => {
    render(<Scoring />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
