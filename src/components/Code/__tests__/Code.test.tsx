import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { vi, describe, it, beforeEach,afterEach, expect } from 'vitest';
import { useParams, useNavigate } from 'react-router';
import { useOtp } from '../hooks/useOtp';
import { Code } from '../Code';
import '@testing-library/jest-dom/vitest';
import { useFetchCode } from '../hooks/useFetchCode';


vi.mock('/src/components/Code/hooks/useFetchCode.ts', () => ({
  useFetchCode: vi.fn(),
}));

vi.mock('/src/components/Code/hooks/useOtp.ts', () => ({
  useOtp: vi.fn(),
}));

vi.mock('react-router', () => ({
  useParams: vi.fn(),
  useNavigate: vi.fn(),
}));

describe('Code Component', () => {
    afterEach(cleanup);

  beforeEach(() => {
    (useFetchCode as jest.Mock).mockReturnValue(['1', '2', '3', '4']);
    (useParams as jest.Mock).mockReturnValue({ applicationId: '123' });
    (useNavigate as jest.Mock).mockReturnValue(vi.fn());
  });

  it('renders loader when isLoading is true', () => {
    (useOtp as jest.Mock).mockReturnValue({ isLoading: true, isSent: false });
    render(<Code />);

    expect(screen.getAllByTestId('loader')[0]).toBeInTheDocument();
  });

  it('renders OTP input fields when isLoading is false', async () => {
    (useOtp as jest.Mock).mockReturnValue({
      isLoading: false,
      isSent: false,
      otp: ['', '', '', ''],
      handleChange: vi.fn(),
      invalid: false,
    });
    render(<Code />);

    await waitFor(() => {
      expect(screen.getAllByRole('textbox')).toHaveLength(4);
    });
  });

  it('renders success message when isSent is true', () => {
    (useOtp as jest.Mock).mockReturnValue({ isSent: true });
    render(<Code />);

    expect(
      screen.getByText(/congratulations! you have completed your new credit card/i)
    ).toBeInTheDocument();
  });
});
