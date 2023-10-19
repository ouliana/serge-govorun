import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import ProtectedLayout from './components/ProtectedLayout';
import Dashboard from './components/Dashboard';
import VideoList from './components/VideoList';
import Advertisement from './components/Advertisement';
import Movies from './components/Movies';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: '/signin',
            element: <SignIn />,
          },
          {
            path: '/dashboard',
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
  {
    path: '/adv',
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
    path: '/movies',
    element: <Movies />,
  },
]);
