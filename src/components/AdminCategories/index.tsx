import { useEffect, useState } from 'react';
import { remult } from 'remult';
import { Category } from '../../shared/Category';
import CategoryListItem from './CategoryListItem';
import { ListContainer } from '../adminStyles';

const AdminCategories = () => {
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

export default AdminCategories;
