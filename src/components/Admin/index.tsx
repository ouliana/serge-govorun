import { Outlet } from 'react-router-dom';
import Auth from '../../Auth';
import { AdminContent, PageAdmin } from '../adminStyles';
import { BrandsContextProvider } from '../../contexts/BrandsContext';

const Admin = () => {
  return (
    <PageAdmin>
      <Auth />
      <AdminContent>
        <BrandsContextProvider>
          <Outlet />
        </BrandsContextProvider>
      </AdminContent>
    </PageAdmin>
  );
};

export default Admin;
