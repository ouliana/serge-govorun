import { Outlet } from 'react-router';
import NavBar from '../NavBar';
import { Content, Page } from '../theme';

const SecondaryPage = () => {
  return (
    <Page>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </Page>
  );
};

export default SecondaryPage;
