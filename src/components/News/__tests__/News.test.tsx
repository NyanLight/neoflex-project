import { cleanup, render, screen } from '@testing-library/react';
import { vi, it, expect, describe, afterEach } from 'vitest';
import { News } from '../News';
import '@testing-library/jest-dom/vitest';
import { useFetchNews } from '../hooks/useFetchNews';

describe('News Component', () => {
  afterEach(cleanup);

  vi.mock('/src/components/News/hooks/useFetchNews.ts', () => ({
    useFetchNews: vi.fn(),
  }));

  it('renders loading state initially', () => {
    (useFetchNews as jest.Mock).mockReturnValue({ news: [], loading: true });
    render(<News />);
    expect(screen.getByText(/loading news/i)).toBeInTheDocument();
  });

  it('renders no news message when news array is empty', () => {
    (useFetchNews as jest.Mock).mockReturnValue({ news: [], loading: false });
    render(<News />);
    expect(screen.getByText(/no news available/i)).toBeInTheDocument();
  });

  it('renders fetched news items', async () => {
      (useFetchNews as jest.Mock).mockReturnValue({news: [
          {
            title: 'Breaking News',
            url: 'https://example.com',
            urlToImage: 'https://example.com/image.jpg',
            description: 'News description',
          },
        ],
        loading: false,
      })
    render(<News />);
    expect(screen.getByText(/breaking news/i)).toBeInTheDocument();
    expect(screen.getByText(/news description/i)).toBeInTheDocument();
  });
});
