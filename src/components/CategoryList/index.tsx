import { useEffect, useState } from 'react';
import { remult } from 'remult';
import { Category } from '../../shared/Category';
import CategoryItem from '../CategoryItem';
import { Container } from './styles';

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const data = await remult.repo(Category).find();
      setCategories(data);
    })();
  }, []);

  return (
    <Container>
      {categories.map(c => (
        <CategoryItem
          key={c.id}
          name={c.category_name}
          icon={c.icon}
        />
      ))}
    </Container>
  );
};

export default CategoryList;
