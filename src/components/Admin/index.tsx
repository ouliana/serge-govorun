import { Outlet } from 'react-router-dom';
import Auth from '../../Auth';
import { AdminContent, PageAdmin } from '../adminStyles';

const Admin = () => {
  return (
    <PageAdmin>
      <Auth />
      <AdminContent>
        <Outlet />
      </AdminContent>
    </PageAdmin>
  );
};

export default Admin;
