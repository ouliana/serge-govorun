import { useEffect, useState } from 'react';
import Chip from '../Chip';
import { Chips } from './styles';
import { remult } from 'remult';
import { Brand } from '../../shared/Brand';
import useLocaleRu from '../../hooks/useLocaleRu';

const Brands = () => {
  const { t, isRu } = useLocaleRu();

  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    (async () => {
      const data = await remult.repo(Brand).find();
      setBrands(data);
    })();
  }, []);

  return (
    <Chips>
      {brands
        .filter(b => b.brand_name_en !== 'Other')
        .map(b => (
          <Chip
            key={b.id}
            brand={isRu ? b.brand_name_ru : b.brand_name_en}
          />
        ))}
      <Chip brand={t('other')} />
    </Chips>
  );
};

export default Brands;
