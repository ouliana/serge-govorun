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
    <>
      <Chips>
        {brands.map(b => (
          <Chip
            key={b.id}
            brand={b.brand_name}
          />
        ))}
      </Chips>
    </>
  );
};

export default Brands;
