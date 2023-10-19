import { Outlet } from 'react-router-dom';
import Brands from '../Brands';
import { Page } from '../theme';

const Advertisement = () => {
  return (
    <Page>
      <h3>Advertisement</h3>
      <Brands />
      <Outlet />
    </Page>
  );
};

export default Advertisement;
