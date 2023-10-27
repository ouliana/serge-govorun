import { remult } from 'remult';
import { useEffect, useState } from 'react';
import { Brand } from '../shared/Brand';

const useBrand = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    let result;
    (async () => {
      result = await remult.repo(Brand).find();
      setBrands(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { brands, loading: !brands };
};

export default useBrand;
