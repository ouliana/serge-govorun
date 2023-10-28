import { useEffect, useState } from 'react';
import { remult } from 'remult';
import { Brand } from '../../shared/Brand';
import { ListContainer } from '../adminStyles';
import BrandListItem from './BrandListItem';

const AdminBrands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    (async () => {
      const data = await remult.repo(Brand).find();
      setBrands(data);
    })();
  }, []);

  return (
    <ListContainer>
      {brands.map(brand => (
        <BrandListItem
          key={brand.id}
          item={brand}
        />
      ))}
    </ListContainer>
  );
};

export default AdminBrands;
