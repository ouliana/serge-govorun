// import { Outlet } from 'react-router-dom';
import About from '../About';
import Videos from '../Videos';
import { Page } from '../theme';

const HomePage = () => {
  return (
    <Page>
      <About />
      <Videos />
    </Page>
  );
};

export default HomePage;
