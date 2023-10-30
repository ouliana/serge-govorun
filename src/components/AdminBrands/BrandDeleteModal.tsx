import { ActionKind, MessageKind } from '../../types';

import {
  Button,
  DangerButton,
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledModal,
} from '../adminStyles';
import { Brand } from '../../shared/Brand';
import { remult } from 'remult';
import { Dispatch, SetStateAction, useContext } from 'react';
import BrandsContext from '../../contexts/BrandsContext';
import ToastMessageContext from '../../contexts/ToastMessageContext';

interface ModalProps {
  openModal: string | undefined;
  setOpenModal: Dispatch<SetStateAction<string | undefined>>;
  brand: Brand;
}

const BrandDeleteModal = ({ openModal, setOpenModal, brand }: ModalProps) => {
  const { state, dispatch } = useContext(BrandsContext);
  const { brands } = state;
  const { messageDispatch } = useContext(ToastMessageContext);

  const handleDelete = async () => {
    try {
      await remult.repo(Brand).delete(brand);
      dispatch({
        type: ActionKind.SET,
        payload: brands.filter(b => b.id !== brand.id),
      });
      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Бренд ${brand.brand_name_ru} удалён.`,
          kind: MessageKind.DELETE,
        },
      });

      setTimeout(
        () =>
          messageDispatch({
            type: ActionKind.CLEAR,
            payload: {
              content: '',
              kind: MessageKind.NONE,
            },
          }),
        5000
      );
    } catch (e) {
      let message = 'Something worng';
      if (e instanceof Error) {
        message += ' ' + e.message;
      }
      throw new Error(message);
    }
    setOpenModal(undefined);
  };

  return (
    <StyledModal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <StyledHeader>Удаление бренда</StyledHeader>
      <StyledBody>
        <span>Вы действительно собираетесь удалить бренд </span>
        <strong>«{brand.brand_name_ru}»</strong>
        <span>?</span>
      </StyledBody>
      <StyledFooter>
        <Button onClick={() => setOpenModal(undefined)}>Отмена</Button>
        <DangerButton onClick={handleDelete}>Удалить</DangerButton>
      </StyledFooter>
    </StyledModal>
  );
};

export default BrandDeleteModal;
