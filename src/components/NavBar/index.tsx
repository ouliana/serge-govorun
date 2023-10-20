import { useNavigate } from 'react-router-dom';
import {
  Container,
  DarkIcon,
  NavLink,
  Navigation,
  ProfileImage,
} from './styles';
import { IconButton } from '../theme';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t } = useTranslation();

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
        <NavLink to='/videos/adv/All'>{t('adv')}</NavLink>
        <NavLink to='/videos/movies'>{t('movies')}</NavLink>
        <IconButton onClick={toggleMode}>
          <DarkIcon />
        </IconButton>
      </Navigation>
    </Container>
  );
};

export default NavBar;
