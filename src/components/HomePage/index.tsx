// import { Outlet } from 'react-router-dom';
import About from '../About';
import CategoryList from '../CategoryList';
import NavBar from '../NavBar';
import { Content, Page } from '../theme';

const HomePage = () => {
  return (
    <Page>
      <NavBar />
      <Content>
        <About />
        <CategoryList />
      </Content>
    </Page>
  );
};

export default HomePage;
