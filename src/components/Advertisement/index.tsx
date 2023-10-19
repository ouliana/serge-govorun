import { Outlet } from 'react-router-dom';
import Brands from '../Brands';

const Advertisement = () => {
  return (
    <>
      <h3>Advertisement</h3>
      <Brands />
      <Outlet />
    </>
  );
};

export default Advertisement;
