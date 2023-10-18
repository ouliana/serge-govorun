import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import ProtectedLayout from './components/ProtectedLayout';
import Dashboard from './components/Dashboard';
import SingleVideo from './components/SingleVideo';
import VideoList from './components/VideoList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'videos',
        element: <VideoList />,
      },
      {
        path: ':id',
        element: <SingleVideo />,
        loader: ({ params }) => {
          console.log('params: ', params);
          return {
            src: `https://www.youtube.com/embed/${params.id}`,
            targetId: params.id,
          };
        },
      },
      {
        path: ':brand',
        element: <VideoList />,
      },
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
  // {
  //   path: '/video',
  //   element: <VideoPage />,
  //   children: [
  //     {
  //       path: ':id',
  //       element: <SingleVideo />,
  //     },
  //   ],
  //   // loader: ({ params }) => {
  //   //   console.log('params: ', params);
  //   //   return `https://www.youtube.com/embed/${params.id}`;
  //   // },
  // },
]);
