// import { Outlet } from 'react-router-dom';
import About from '../About';
import CategoryList from '../CategoryList';
import NavBar from '../NavBar';
import { Page } from '../theme';
import { Container } from './styles';

const HomePage = () => {
  return (
    <Page>
      <NavBar />
      <Container>
        <About />
        <CategoryList />
      </Container>
    </Page>
  );
};

export default HomePage;
