import { createBrowserRouter } from 'react-router-dom';
import SecondaryPage from './components/SecondaryPage';
import Advertisement from './components/Advertisement';
import VideoList from './components/VideoList';
import Movies from './components/Movies';
import HomePage from './components/HomePage';
import Admin from './components/Admin';
import AdminVideo from './components/AdminVideo';
import Dashboard from './components/Dashboard';

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
        path: 'video',
        element: <AdminVideo />,
      },
    ],
  },
]);
