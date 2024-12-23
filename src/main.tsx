import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import '@fontsource-variable/rubik/index.css';
import '@fontsource-variable/nunito-sans/index.css';
import './index.css';
import HomePage from './pages/HomePage';
import { Layout } from './pages/Layout';



const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
