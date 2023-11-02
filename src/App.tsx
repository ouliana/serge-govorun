import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import Admin from './components/Admin';
import AdminVideos from './components/AdminVideos';
import Dashboard from './components/Dashboard';
import AdminCategories from './components/AdminCategories';
import AdminBrands from './components/AdminBrands';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'videos',
        element: <AdminVideos />,
      },
      {
        path: 'categories',
        element: <AdminCategories />,
      },
      {
        path: 'brands',
        element: <AdminBrands />,
      },
    ],
  },
]);
