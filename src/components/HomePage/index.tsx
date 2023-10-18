// import { Outlet } from 'react-router-dom';
import About from '../About';
import MainContent from '../MainContent';
import { Page } from '../theme';

const HomePage = () => {
  return (
    <Page>
      <About />
      <MainContent />
      {/* <Outlet /> */}
    </Page>
  );
};

export default HomePage;
