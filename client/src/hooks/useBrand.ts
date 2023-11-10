import { useEffect, useState } from 'react';
import { Brand } from '../types';

const useBrand = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    let result;
    (async () => {
      result = [] as Brand[]; //await remult.repo(Brand).find();
      setBrands(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { brands, loading: !brands };
};

export default useBrand;
