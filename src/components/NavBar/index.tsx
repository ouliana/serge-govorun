import { useNavigate } from 'react-router-dom';
import {
  Container,
  DarkIcon,
  NavLink,
  Navigation,
  ProfileImage,
} from './styles';
import { IconButton } from '../theme';

const NavBar = () => {
  const toggleMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const navigate = useNavigate();
  return (
    <Container>
      <ProfileImage onClick={() => navigate('/')} />
      <Navigation>
        <NavLink to='/videos/adv/All'>Advertisement</NavLink>
        <NavLink to='/videos/movies'>Movies</NavLink>
        <NavLink to='/contacts'>Contact me</NavLink>
        <IconButton onClick={toggleMode}>
          <DarkIcon />
        </IconButton>
      </Navigation>
    </Container>
  );
};

export default NavBar;
