import { useState } from 'react';
import IconButton from '../Button';
import { ButtonGroup, ItemContainer } from '../adminStyles';
import { Format } from '../../shared/Format';
import FormatModal from './FormatModal';

interface Props {
  item: Format;
}

const FormatListItem = ({ item }: Props) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <ItemContainer>
      <div>
        <div>{item.format_name}</div>
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
        <FormatModal
          openModal={props.openModal}
          setOpenModal={props.setOpenModal}
          format={item}
        />
      </ButtonGroup>
    </ItemContainer>
  );
};

export default FormatListItem;
