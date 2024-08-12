import { createBrowserRouter } from 'react-router-dom';
import AppLoader from '@/components/Loaders/AppLoader';
import App from '@/App';
import Dashboard from '@/pages/Dashboard/Dashboard';
import HotelPage from '@/pages/HotelPage/HotelPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: AppLoader,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: AppLoader,
      },
      {
        path: 'dashboard/:id',
        element: <HotelPage />,
        loader: AppLoader,
      },
    ],
  },
]);
