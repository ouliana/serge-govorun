import { Outlet } from 'react-router-dom';
import Auth from '../../Auth';
import { AdminContent, PageAdmin } from '../adminStyles';
import { ToastMessageContextProvider } from '../../contexts/ToastMessageContext';

const Admin = () => {
  return (
    <PageAdmin>
      <Auth />
      <AdminContent>
        <ToastMessageContextProvider>
          <Outlet />
        </ToastMessageContextProvider>
      </AdminContent>
    </PageAdmin>
  );
};

export default Admin;
