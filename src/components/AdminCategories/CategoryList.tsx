import { useEffect, useState } from 'react';
import { Category } from '../../shared/Category';
import { remult } from 'remult';
import { ListContainer } from '../adminStyles';
import CategoryListItem from './CategoryListItem';

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const data = await remult.repo(Category).find();
      setCategories(data);
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
