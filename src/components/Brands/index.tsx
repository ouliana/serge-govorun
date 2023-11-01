import { useEffect, useState } from 'react';
import Chip from '../Chip';
import { Chips } from './styles';
import { remult } from 'remult';
import { Brand } from '../../shared/Brand';

const Brands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    (async () => {
      const data = await remult.repo(Brand).find();
      setBrands(data);
    })();
  }, []);

  return (
    <Chips>
      <Chip />
      {brands
        .filter(brand => brand.brand_name_en !== 'Other')
        .map(brand => (
          <Chip
            key={brand.id}
            brand={brand}
          />
        ))}
      <Chip brand={brands.find(brand => brand.brand_name_en === 'Other')} />
    </Chips>
  );
};

export default Brands;
