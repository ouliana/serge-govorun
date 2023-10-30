import { useNavigate, useParams } from 'react-router-dom';
import { ChipItem, SelectedChipItem } from './styles';
import useLocaleRu from '../../hooks/useLocaleRu';
import { Brand } from '../../shared/Brand';

interface Params {
  brand: Brand | undefined;
}

const Chip = ({ brand }: Params) => {
  const params = useParams();
  const { isRu } = useLocaleRu();

  const navigate = useNavigate();

  if (!brand) return null;

  const handleClick = () => {
    if (brand) navigate(`/videos/adv/${brand.brand_name_en}`);
  };

  if (
    params.brand === brand.brand_name_ru ||
    params.brand === brand.brand_name_en
  )
    return (
      <SelectedChipItem onClick={handleClick}>
        {isRu ? brand.brand_name_ru : brand.brand_name_en}
      </SelectedChipItem>
    );

  return (
    <ChipItem onClick={handleClick}>
      {isRu ? brand.brand_name_ru : brand.brand_name_en}
    </ChipItem>
  );
};

export default Chip;
