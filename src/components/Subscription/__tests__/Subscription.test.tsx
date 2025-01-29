import { cleanup, render, screen } from '@testing-library/react';
import { vi, describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Subscription } from '../Subscription';
import { checkSubscriptionStatus } from '../utils/subscriptionStorage';

vi.mock('/src/components/Subscription/utils/subscriptionStorage.ts', () => ({
  checkSubscriptionStatus: vi.fn(),
  saveSubscriptionStatus: vi.fn(),
}));

vi.mock('src/components/Subscription/hooks/useSubscribe.ts', () => ({
  useSubscribe: vi.fn(),
}));

describe('Subscription component', () => {
    afterEach(cleanup);

  it('should render the title and subscription message', () => {
    render(<Subscription />);
    const title = screen.getByText(/Subscribe Newsletter & get/i);
    const subtitle = screen.getByText(/Bank News/i);
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('should render subscribed message if already subscribed', async () => {
    (checkSubscriptionStatus as jest.Mock).mockReturnValue(true);
    render(<Subscription />);
    const subscribedMessage = await screen.findByText(/You are already subscribed to the bank's newsletter!/i);
    expect(subscribedMessage).toBeInTheDocument();
  });

  it('should render the email input and button when not subscribed', async () => {
    (checkSubscriptionStatus as jest.Mock).mockReturnValue(false);
    render(<Subscription />);
    const emailInput = screen.getByPlaceholderText(/Your email/i);
    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });
    expect(emailInput).toBeInTheDocument();
    expect(subscribeButton).toBeInTheDocument();
  });
});