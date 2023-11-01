import { useNavigate, useParams } from 'react-router-dom';
import { ChipItem, SelectedChipItem } from './styles';
import useLocaleRu from '../../hooks/useLocaleRu';
import { Brand } from '../../shared/Brand';
import { useEffect, useState } from 'react';

interface Params {
  brand?: Brand | undefined;
}

const Chip = ({ brand }: Params) => {
  const params = useParams();
  const { t, isRu } = useLocaleRu();

  const navigate = useNavigate();

  const [selected, setSelected] = useState(false);

  const [text, setText] = useState<string>(t('allBrands'));

  useEffect(() => {
    if (!brand) {
      setText(t('allBrands'));
    } else if (isRu) {
      setText(brand.brand_name_ru);
    } else {
      setText(brand.brand_name_ru);
    }
  }, [isRu, t, brand]);

  useEffect(() => {
    if (!brand && params.brand === 'All') {
      setSelected(true);
    } else if (brand && params.brand === brand.brand_name_en) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [brand, params.brand]);

  const handleClick = () => {
    const path = brand ? brand.brand_name_en : 'All';
    navigate(`/videos/adv/${path}`);
  };

  return (
    <>
      {selected ? (
        <SelectedChipItem onClick={handleClick}> {text}</SelectedChipItem>
      ) : (
        <ChipItem onClick={handleClick}> {text} </ChipItem>
      )}
    </>
  );
};

export default Chip;
