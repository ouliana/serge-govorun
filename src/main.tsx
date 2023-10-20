import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from './App';
import './i18n/config';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Outlet />
  </React.StrictMode>
);
