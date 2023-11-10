import { useEffect, useState } from 'react';
import { ListContainer } from '../adminStyles';
import CategoryListItem from './CategoryListItem';
import { Category } from '../../types';

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      // const data = await remult.repo(Category).find();
      setCategories([]);
    })();
  }, []);

  return (
    <ListContainer>
      {categories.map(c => (
        <CategoryListItem
          key={c.id}
          item={c}
        />
      ))}
    </ListContainer>
  );
};

export default CategoryList;
