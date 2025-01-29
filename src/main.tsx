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
import { ProtectedRoute } from './pages/ProtectedRoute';
import { Layout } from './pages/Layout';
import { Loan } from './pages/Loan';
import { NotFound } from './components/NotFound/NotFound';
import { Scoring } from './components/Scoring';
import { Document } from './components/Document';
import { Sign } from './components/Sign';
import { Code } from './components/Code';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/loan',
        element: <Loan />,
      },
      {
        path: '/loan/:applicationId',
        element: <ProtectedRoute requiredStep={2} />,
        children: [{ path: '', element: <Scoring /> }],
      },
      {
        path: 'loan/:applicationId/document/',
        element: <ProtectedRoute requiredStep={3} />,
        children: [{ path: '', element: <Document /> }],
      },
      {
        path: 'loan/:applicationId/document/sign',
        element: <ProtectedRoute requiredStep={4} />,
        children: [{ path: '', element: <Sign /> }],
      },
      {
        path: 'loan/:applicationId/code',
        element: <ProtectedRoute requiredStep={5} />,
        children: [{ path: '', element: <Code /> }],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
