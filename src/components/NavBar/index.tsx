import { useNavigate } from 'react-router-dom';
import {
  Container,
  NavLink,
  Navigation,
  PersonIcon,
  ProfileImage,
} from './styles';
import { IconButton } from '../theme';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <Container>
      <ProfileImage onClick={() => navigate('/')} />
      <Navigation>
        <NavLink to='/videos/adv/All'>{t('adv')}</NavLink>
        <NavLink to='/videos/movies'>{t('movies')}</NavLink>
        <IconButton onClick={() => navigate('/admin')}>
          <PersonIcon />
        </IconButton>
      </Navigation>
    </Container>
  );
};

export default NavBar;
