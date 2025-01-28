import { render, screen, waitFor } from '@testing-library/react';
import { it, expect, describe, afterEach, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Currencies } from '../Currencies';
import { fetchCurrencies } from '../../../api/fetchCurrencies.api';

vi.mock('/src/api/fetchCurrencies.api.ts', () => ({
  fetchCurrencies: vi.fn(),
}));

describe('Currencies Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('displays loading state initially', () => {
    render(
        <Currencies />
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('displays error message if fetch fails', async () => {
    (fetchCurrencies as jest.Mock).mockRejectedValue(new Error('Failed to fetch currencies'));

    render(<Currencies />);

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch currencies/i)).toBeInTheDocument();
    });
  });

  it('displays currency list when fetch is successful', async () => {
    const mockCurrencies = [
      { id: '1', name: 'USD', value: '1.00' },
      { id: '2', name: 'EUR', value: '0.85' },
    ];
    (fetchCurrencies as jest.Mock).mockResolvedValue(mockCurrencies);

    render(<Currencies />);

    await waitFor(() => {
      expect(screen.getByText(/usd:/i)).toBeInTheDocument();
      expect(screen.getByText('1.00')).toBeInTheDocument();
      expect(screen.getByText(/eur:/i)).toBeInTheDocument();
      expect(screen.getByText('0.85')).toBeInTheDocument();
    });
  });
});