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
                      default-src 'self';
                      script-src 'self';
                      img-src 'self' https://img.youtube.com;
                      media-src https://www.youtube.com;
                `}
        ></meta>
      </Helmet>
      <Outlet />
    </HelmetProvider>
  </React.StrictMode>
);
