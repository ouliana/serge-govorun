import { useState } from 'react';
import IconButton from '../Button';
import { ButtonGroup, ItemContainer } from '../adminStyles';
import { Brand } from '../../shared/Brand';
import BrandModal from './BrandModal';

interface Props {
  item: Brand;
}

const BrandListItem = ({ item }: Props) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

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
            props.setOpenModal('default');
          }}
        />
        <IconButton
          icon='trash'
          onClick={() => {}}
        />
        <BrandModal
          openModal={props.openModal}
          setOpenModal={props.setOpenModal}
          brand={item}
        />
      </ButtonGroup>
    </ItemContainer>
  );
};

export default BrandListItem;
