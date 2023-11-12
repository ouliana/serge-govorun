import { useEffect, useState } from 'react';
import { Brand } from '../types';
import { brandsService } from '../services';

const useBrand = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    (async () => {
      const data = await brandsService.getAll();
      setBrands(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { brands, loading: !brands };
};

export default useBrand;
