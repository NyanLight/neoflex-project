import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { useParams, useNavigate } from 'react-router';
import '@testing-library/jest-dom/vitest';
import { useFetchTable } from '../hooks/useFetchTable';
import { useSendDocument } from '../hooks/useSendDocument';
import { useModal } from '../hooks/useModal';
import { Document } from '../Document';
import { useDenyApplication } from '../hooks/useDenyApplication';

vi.mock('/src/components/Document/hooks/useFetchTable.ts', () => ({
  useFetchTable: vi.fn(),
}));

vi.mock('/src/components/Document/hooks/useSendDocument.ts', () => ({
  useSendDocument: vi.fn(),
}));

vi.mock('/src/components/Document/hooks/useDenyApplication.ts', () => ({
  useDenyApplication: vi.fn(),
}));

vi.mock('/src/components/Document/hooks/useModal.ts', () => ({
  useModal: vi.fn(),
}));

vi.mock('react-router', () => ({
  useParams: vi.fn(),
  useNavigate: vi.fn(),
}));

describe('Document Component', () => {
    afterEach(cleanup);
    beforeEach(() => {
      (useParams as jest.Mock).mockReturnValue({ applicationId: '123' });
      (useNavigate as jest.Mock).mockReturnValue(vi.fn());
    });
  
    it('renders the payment schedule table', () => {
      (useFetchTable as jest.Mock).mockReturnValue([]);
      (useSendDocument as jest.Mock).mockReturnValue({ documentSent: false, handleSend: vi.fn() });
      (useModal as jest.Mock).mockReturnValue({ modal: false, toggleModal: vi.fn() });
      (useDenyApplication as jest.Mock).mockReturnValue({ denySent: false, handleDeny: vi.fn() });
  
      render(<Document />);
  
      expect(screen.getByText(/step 3 of 5/i)).toBeInTheDocument();
    });
  
    it('renders the success message when documentSent is true', () => {
      (useSendDocument as jest.Mock).mockReturnValue({ documentSent: true, handleSend: vi.fn() });
      (useDenyApplication as jest.Mock).mockReturnValue({ denySent: false, handleDeny: vi.fn() });
  
      render(<Document />);
  
      expect(screen.getByText(/documents are formed/i)).toBeInTheDocument();
      expect(
        screen.getByText(/documents for signing will be sent to your email/i)
      ).toBeInTheDocument();
    });
  
    it('renders and handles modal for denying application', async () => {
      const toggleModal = vi.fn();
      const handleDeny = vi.fn();
      (useModal as jest.Mock).mockReturnValue({ modal: true, toggleModal });
      (useDenyApplication as jest.Mock).mockReturnValue({ denySent: false, handleDeny });
  
      render(<Document />);
  
      await waitFor(() => {
        expect(screen.getByText(/deny application/i)).toBeInTheDocument();
        expect(
          screen.getByText(/you exactly sure, you want to cancel this application\?/i)
        ).toBeInTheDocument();
      });
    });
  });
  