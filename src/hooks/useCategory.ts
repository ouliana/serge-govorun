import { remult } from 'remult';
import { useEffect, useState } from 'react';
import { Category } from '../shared/Category';

const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    let result;
    (async () => {
      result = await remult.repo(Category).find();
      setCategories(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { categories, loading: !categories };
};

export default useCategory;
