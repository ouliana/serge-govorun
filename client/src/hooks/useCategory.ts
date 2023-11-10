import { useEffect, useState } from 'react';
import { Category } from '../types';

const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const result = [] as Category[];
    (async () => {
      // result = await remult.repo(Category).find();
      setCategories(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { categories, loading: !categories };
};

export default useCategory;
