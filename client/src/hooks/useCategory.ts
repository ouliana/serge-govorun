import { useEffect, useState } from 'react';
import { Category } from '../types';
import { categoriesService } from '../services';

const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const data = await categoriesService.getAll();
      setCategories(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { categories, loading: !categories };
};

export default useCategory;
