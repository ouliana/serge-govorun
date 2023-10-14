import { remult } from 'remult';
import { Brand } from '../shared/Brand';
import { useEffect, useState } from 'react';

const useBrands = () => {
  const brandRepo = remult.repo(Brand);
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    brandRepo.find().then(setBrands);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { brands, loading: !brands };
};

export default useBrands;
