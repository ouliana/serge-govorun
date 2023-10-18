import { Outlet } from 'react-router-dom';
import Brands from '../Brands';
import { Page } from '../theme';
import { BrandContextProvider } from '../../context/BrandContext';

const Advertisement = () => {
  return (
    <BrandContextProvider>
      <Page>
        <h3>Advertisement</h3>
        <Brands />
        <Outlet />
      </Page>
    </BrandContextProvider>
  );
};

export default Advertisement;
