import { useContext, useEffect } from 'react';
import { remult } from 'remult';
import { Brand } from '../../shared/Brand';
import { ListContainer } from '../adminStyles';
import BrandListItem from './BrandListItem';
import BrandsContext from '../../contexts/BrandsContext';
import { ActionKind } from '../../types';

const AdminBrands = () => {
  const { state, dispatch } = useContext(BrandsContext);
  const { brands } = state;

  console.log('state: ', state);

  useEffect(() => {
    (async () => {
      const data = await remult.repo(Brand).find();
      dispatch({
        type: ActionKind.SET,
        payload: data,
      });
    })();
  }, [dispatch]);

  return (
    <>
      <ListContainer>
        {brands.map((brand: Brand) => (
          <BrandListItem
            key={brand.id}
            item={brand}
          />
        ))}
      </ListContainer>
    </>
  );
};

export default AdminBrands;
