import { Outlet } from 'react-router';
import { Page } from '../theme';
import { Container } from './styles';
import NavBar from '../NavBar';

const SecondaryPage = () => {
  return (
    <Page>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </Page>
  );
};

export default SecondaryPage;
