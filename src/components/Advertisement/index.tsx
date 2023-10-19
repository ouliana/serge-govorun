import { Outlet } from 'react-router-dom';
import Brands from '../Brands';
import { Container } from './styles';

const Advertisement = () => {
  return (
    <Container>
      <h3>Advertisement</h3>
      <Brands />
      <Outlet />
    </Container>
  );
};

export default Advertisement;
