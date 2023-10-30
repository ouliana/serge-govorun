import { useContext, useEffect, useState } from 'react';
import { remult } from 'remult';
import { Brand } from '../../shared/Brand';
import { Button, ListContainer } from '../adminStyles';
import BrandListItem from './BrandListItem';
import BrandsContext from '../../contexts/BrandsContext';
import { ActionKind } from '../../types';
import BrandModal from '../AdminBrands/BrandEditModal';
import Toast from '../Toast';

const BrandList = () => {
  const { state, dispatch } = useContext(BrandsContext);
  const { brands } = state;

  const [openModal, setOpenModal] = useState<string | undefined>();

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
      <Button onClick={() => setOpenModal('default')}>Добавить</Button>
      <BrandModal
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ListContainer>
        {brands.map((brand: Brand) => (
          <BrandListItem
            key={brand.id}
            item={brand}
          />
        ))}
      </ListContainer>
      <Toast />
    </>
  );
};

export default BrandList;
