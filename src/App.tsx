import { createBrowserRouter } from 'react-router-dom';
import SecondaryPage from './components/SecondaryPage';
import Advertisement from './components/Advertisement';
import VideoList from './components/VideoList';
import Movies from './components/Movies';
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
    path: '/videos',
    element: <SecondaryPage />,
    children: [
      {
        path: 'adv',
        element: <Advertisement />,
        children: [
          {
            path: ':brand',
            element: <VideoList category='Advertising' />,
            loader: ({ params }) => {
              return {
                brand: params.brand,
              };
            },
          },
        ],
      },
      {
        path: 'movies',
        element: <Movies />,
      },
    ],
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
