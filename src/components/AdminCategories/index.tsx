import { CategoryContextProvider } from '../../contexts/CategoryContext';
import CategoryList from '../CategoryList';

const AdminCategories = () => {
  return (
    <CategoryContextProvider>
      <CategoryList />
    </CategoryContextProvider>
  );
};

export default AdminCategories;
