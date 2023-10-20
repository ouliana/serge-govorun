import { useEffect, useState } from 'react';
import { remult } from 'remult';
import { Category } from '../../shared/Category';
import CategoryItem from '../CategoryItem';
import { Container } from './styles';
import useLocaleRu from '../../hooks/useLocaleRu';

const CategoryList = () => {
  const { isRu } = useLocaleRu();

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
          name={isRu ? c.category_name_ru : c.category_name_en}
          icon={c.icon}
        />
      ))}
    </Container>
  );
};

export default CategoryList;
