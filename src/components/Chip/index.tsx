import { useNavigate, useParams } from 'react-router-dom';
import { ChipItem, SelectedChipItem } from './styles';

interface Params {
  brand: string;
}

const Chip = ({ brand }: Params) => {
  const params = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/adv/${brand}`);
  };

  if (params.brand === brand)
    return <SelectedChipItem onClick={handleClick}>{brand}</SelectedChipItem>;

  return <ChipItem onClick={handleClick}>{brand}</ChipItem>;
};

export default Chip;
