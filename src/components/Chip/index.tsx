import { ChipItem, SelectedChipItem } from './styles';
import useLocaleRu from '../../hooks/useLocaleRu';
import { useContext, useEffect, useState } from 'react';
import { ActionKind } from '../../types';
import SelectedBrandContext from '../../contexts/SelectedBrandContext';
import { Brand } from '../../shared/Brand';

interface Props {
  brand?: Brand;
}

const Chip = ({ brand }: Props) => {
  const { t, isRu } = useLocaleRu();

  const { state, dispatch } = useContext(SelectedBrandContext);
  const { selectedBrand } = state;

  const [selected, setSelected] = useState(false);
  const [text, setText] = useState<string>(t('allBrands'));

  useEffect(() => {
    if (!brand) {
      setText(t('allBrands'));
    } else {
      setText(t(brand.brand_name_en));
    }
  }, [isRu, t, brand]);

  useEffect(() => {
    if (!brand && !selectedBrand) {
      setSelected(true);
    } else if (brand && brand.id === selectedBrand) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [brand, selectedBrand]);

  const handleClick = () => {
    dispatch({
      type: ActionKind.SET,
      payload: brand ? brand.id : '',
    });
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
