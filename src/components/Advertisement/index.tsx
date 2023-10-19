import { Outlet } from 'react-router-dom';
import Brands from '../Brands';
import { Page } from '../theme';
import { Container } from './styles';

const Advertisement = () => {
  return (
    <Page>
      <Container>
        <h3>Advertisement</h3>
        <Brands />
        <Outlet />
      </Container>
    </Page>
  );
};

export default Advertisement;
