import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { MemoryRouter } from 'react-router';
import { Sign } from '../Sign';
import { useSendSign } from '../hooks/useSendSign';
import { vi, expect, describe, it, afterEach } from 'vitest';


vi.mock('/src/components/Sign/hooks/useSendSign.ts', () => ({
  useSendSign: vi.fn(),
}));

describe('Sign component', () => {
   afterEach(cleanup);

  it('should render the title and step information', () => {
    const mockUseSendSign = {
      isSent: false,
      handleSign: vi.fn(),
    };
    (useSendSign as jest.Mock).mockReturnValue(mockUseSendSign);

    render(
      <MemoryRouter initialEntries={['/sign/123']}>
        <Sign />
      </MemoryRouter>
    );

    const title = screen.getByText(/Signing of documents/i);
    const step = screen.getByText(/Step 4 of 5/i);

    expect(title).toBeInTheDocument();
    expect(step).toBeInTheDocument();
  });

  it('should render the PDF icon and description', () => {
    const mockUseSendSign = {
      isSent: false,
      handleSign: vi.fn(),
    };
    (useSendSign as jest.Mock).mockReturnValue(mockUseSendSign);

    render(
      <MemoryRouter initialEntries={['/sign/123']}>
        <Sign />
      </MemoryRouter>
    );

    const pdfIcon = screen.getByRole('img', { name: /PDF document/i });
    const pdfDescription = screen.getByText(/Information on your card/i);

    expect(pdfIcon).toBeInTheDocument();
    expect(pdfDescription).toBeInTheDocument();
  });

  it('should display success message after signing', async () => {
    const mockUseSendSign = {
      isSent: true,
      handleSign: vi.fn(),
    };
    (useSendSign as jest.Mock).mockReturnValue(mockUseSendSign);

    render(
        <MemoryRouter initialEntries={['/sign/123']}>
        <Sign />
      </MemoryRouter>
    );

    const successMessage = screen.getByText(/Documents have been successfully signed and sent for approval/i);
    const confirmationMessage = screen.getByText(/Within 10 minutes you will be sent a PIN code to your email for confirmation/i);

    expect(successMessage).toBeInTheDocument();
    expect(confirmationMessage).toBeInTheDocument();
  });
});
