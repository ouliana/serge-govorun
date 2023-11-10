import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from './App';
import './i18n/config';
import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Helmet>
        <meta
          httpEquiv='Content-Security-Policy'
          content={`
                      default-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
                      script-src 'self'  https://www.youtube.com;
                      frame-src https://www.youtube.com;
                      img-src 'self' https://img.youtube.com https://i.ytimg.com/;
                      media-src https://www.youtube.com;
                `}
        ></meta>
      </Helmet>
      <Outlet />
    </HelmetProvider>
  </React.StrictMode>
);
