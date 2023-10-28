import { Outlet } from 'react-router-dom';
import Auth from '../../Auth';
import { PageAdmin } from '../theme';

const Admin = () => {
  return (
    <PageAdmin>
      <Auth />
      <Outlet />
    </PageAdmin>
  );
};

export default Admin;
