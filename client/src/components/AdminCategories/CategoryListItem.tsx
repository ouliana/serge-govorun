import { useState } from 'react';
import IconButton from '../Button';
import { ButtonGroup, ItemContainer } from '../adminStyles';
import CategoryModal from './CaregoryModal';
import { Category } from '../../types';

interface Props {
  item: Category;
}

const CategoryListItem = ({ item }: Props) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <ItemContainer>
      <div>
        <div>{item.category_name_ru}</div>
        <div>{item.category_name_en}</div>
      </div>
      <ButtonGroup>
        <IconButton
          icon='pencil'
          onClick={() => {
            props.setOpenModal('default');
          }}
        />
        <IconButton
          icon='trash'
          onClick={() => {}}
        />
        <CategoryModal
          openModal={props.openModal}
          setOpenModal={props.setOpenModal}
          category={item}
        />
      </ButtonGroup>
    </ItemContainer>
  );
};

export default CategoryListItem;
