import { useState } from 'react';
import IconButton from '../Button';
import { ButtonGroup, ItemContainer } from '../adminStyles';
import { Brand } from '../../shared/Brand';
import BrandEditModal from './BrandEditModal';
import BrandDeleteModal from './BrandDeleteModal';

interface Props {
  item: Brand;
}

const BrandListItem = ({ item }: Props) => {
  const [openEditModal, setOpenEditModal] = useState<string | undefined>();
  const [openDeleteModal, setOpenDeleteModal] = useState<string | undefined>();

  return (
    <ItemContainer>
      <div>
        <div>{item.brand_name_ru}</div>
        <div>{item.brand_name_en}</div>
      </div>
      <ButtonGroup>
        <IconButton
          icon='pencil'
          onClick={() => {
            setOpenEditModal('default');
          }}
        />
        <BrandEditModal
          openModal={openEditModal}
          setOpenModal={setOpenEditModal}
          brand={item}
        />
        <IconButton
          icon='trash'
          onClick={() => {
            setOpenDeleteModal('default');
          }}
        />
        <BrandDeleteModal
          openModal={openDeleteModal}
          setOpenModal={setOpenDeleteModal}
          brand={item}
        />
      </ButtonGroup>
    </ItemContainer>
  );
};

export default BrandListItem;
