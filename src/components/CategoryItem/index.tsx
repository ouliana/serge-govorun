import { FcFilmReel, FcAdvertising } from 'react-icons/fc';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
  icon: string;
}

const CategoryItem = ({ name, icon }: Props) => {
  const navigate = useNavigate();
  const adv = icon === 'FcAdvertising';
  const movie = icon === 'FcFilmReel';

  return (
    <Container onClick={() => navigate(adv ? '/adv/All' : '/movies')}>
      {adv && <FcAdvertising size='3rem' />}
      {movie && <FcFilmReel size='3rem' />}
      {name}
    </Container>
  );
};

export default CategoryItem;
