import { BrandsContextProvider } from '../../contexts/BrandsContext';
import BrandList from './BrandList';

const AdminBrands = () => {
  return (
    <BrandsContextProvider>
      <BrandList />
    </BrandsContextProvider>
  );
};

export default AdminBrands;
