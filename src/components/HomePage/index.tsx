// import { Outlet } from 'react-router-dom';
import About from '../About';
import CategoryList from '../CategoryList';
import { Page } from '../theme';

const HomePage = () => {
  return (
    <Page>
      <About />
      <CategoryList />
    </Page>
  );
};

export default HomePage;
