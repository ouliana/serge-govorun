import { Outlet } from 'react-router-dom';
import Auth from '../../Auth';
import { AdminContent, PageAdmin } from '../adminStyles';
import { ToastMessageContextProvider } from '../../contexts/ToastMessageContext';
import { VideosContextProvider } from '../../contexts/VideosContext';

const Admin = () => {
  return (
    <PageAdmin>
      <Auth />
      <AdminContent>
        <ToastMessageContextProvider>
          <VideosContextProvider>
            <Outlet />
          </VideosContextProvider>
        </ToastMessageContextProvider>
      </AdminContent>
    </PageAdmin>
  );
};

export default Admin;
