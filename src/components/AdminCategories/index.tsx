import useCategory from '../../hooks/useCategory';

const AdminCategories = () => {
  const { categories } = useCategory();

  return <>{categories && categories.map(c => c.category_name_ru)}</>;
};

export default AdminCategories;
