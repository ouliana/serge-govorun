import { useContext, useEffect, useState } from 'react';
import VideosContext from '../../contexts/VideosContext';
import { Video } from '../../types';
import { ActionKind, MessageKind } from '../../types';
import { compareFn } from '../../utils/utils';
import AdminVideoListItem from './AdminVideoListItem';
import { ButtonsWrapper, VideoListContainer } from './styles';
import { Button } from '../adminStyles';
import ToastMessageContext from '../../contexts/ToastMessageContext';
import VideoEditModal from './VideoEditModal';
import VideoDeleteModal from './VideoDeleteModal';
import Toast from '../Toast';

const AdminVideoList = () => {
  const {
    state: { videos },
    dispatch,
  } = useContext(VideosContext);
  const { messageDispatch } = useContext(ToastMessageContext);

  const [dragId, setDragId] = useState<string>();

  const [current, setCurrent] = useState<Video | null>(null);
  const [openEditModal, setOpenEditModal] = useState<string | undefined>();
  const [openDeleteModal, setOpenDeleteModal] = useState<string | undefined>();

  const handleDrag = (event: React.DragEvent<HTMLElement>) => {
    setDragId(event.currentTarget.id);
  };

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    const dragItem = videos.find(
      video => video.video_order.toString() === dragId
    );
    const dropItem = videos.find(
      video => video.video_order.toString() === event.currentTarget.id
    );

    if (!dragItem || !dropItem) return null;

    const dragItemOrder = dragItem.video_order;
    const dropItemOrder = dropItem.video_order;

    const newItemState = videos.map(video => {
      if (video.video_order.toString() === dragId) {
        video.video_order = dropItemOrder;
      } else if (video.video_order.toString() === event.currentTarget.id) {
        video.video_order = dragItemOrder;
      }

      return video;
    });

    dispatch({
      type: ActionKind.SET,
      payload: newItemState,
    });
  };

  const saveOrder = async () => {
    try {
      for (const video of videos) {
        console.log(video);
        // await remult.repo(Video).save(video);
      }

      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Порядок сохранён.`,
          kind: MessageKind.SUCCESS,
        },
      });
      setTimeout(() => {
        messageDispatch({
          type: ActionKind.CLEAR,
          payload: {
            content: ``,
            kind: MessageKind.NONE,
          },
        });
      }, 5000);
    } catch (e) {
      let message = 'Something worng';
      if (e instanceof Error) {
        message += ' ' + e.message;
      }
      throw new Error(message);
    }
  };

  useEffect(() => {
    (async () => {
      // const data = await remult.repo(Video).find();
      // dispatch({
      //   type: ActionKind.SET,
      //   payload: data,
      // });
    })();
  }, [dispatch]);

  return (
    <VideoListContainer>
      <h4>Видео</h4>
      <ButtonsWrapper>
        <Button onClick={() => setOpenEditModal('default')}>Добавить</Button>
        <Button onClick={() => saveOrder()}>Сохранить</Button>
      </ButtonsWrapper>
      <VideoEditModal
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
        video={current}
      />
      <VideoDeleteModal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        video={current}
      />
      {videos.sort(compareFn).map(v => (
        <AdminVideoListItem
          key={v.id}
          video={v}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          setOpenEditModal={setOpenEditModal}
          setOpenDeleteModal={setOpenDeleteModal}
          setCurrent={setCurrent}
        />
      ))}
      <Toast />
    </VideoListContainer>
  );
};

export default AdminVideoList;
