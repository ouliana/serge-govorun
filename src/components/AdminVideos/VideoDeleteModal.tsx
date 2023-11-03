import { ActionKind, MessageKind } from '../../types';

import {
  Button,
  DangerButton,
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledModal,
} from '../adminStyles';
import { remult } from 'remult';
import { Dispatch, SetStateAction, useContext } from 'react';
import ToastMessageContext from '../../contexts/ToastMessageContext';
import { Video } from '../../shared/Video';
import VideosContext from '../../contexts/VideosContext';

interface ModalProps {
  openModal: string | undefined;
  setOpenModal: Dispatch<SetStateAction<string | undefined>>;
  video: Video;
}

const VideoDeleteModal = ({ openModal, setOpenModal, video }: ModalProps) => {
  const { state, dispatch } = useContext(VideosContext);
  const { videos } = state;
  const { messageDispatch } = useContext(ToastMessageContext);

  const handleDelete = async () => {
    try {
      await remult.repo(Video).delete(video);
      dispatch({
        type: ActionKind.SET,
        payload: videos.filter(b => b.id !== video.id),
      });
      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Видео ${video.title_ru} удалено.`,
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
      let message = 'Error occured while deleting video';
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
      <StyledHeader>Удаление видео</StyledHeader>
      <StyledBody>
        <span>Вы действительно собираетесь удалить видео </span>
        <strong>«{video.title_ru}»</strong>
        <span>?</span>
      </StyledBody>
      <StyledFooter>
        <Button onClick={() => setOpenModal(undefined)}>Отмена</Button>
        <DangerButton onClick={handleDelete}>Удалить</DangerButton>
      </StyledFooter>
    </StyledModal>
  );
};

export default VideoDeleteModal;
