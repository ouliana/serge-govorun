import * as Yup from 'yup';

import {
  VideoFormValues,
  ModalProps,
  ActionKind,
  MessageKind,
  VideoData,
} from '../../types';
import { withFormik } from 'formik';
import VideoTitle from './VideoTitle';
import { stillUrl, toVideo } from '../../utils';
import {
  Button,
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledModal,
} from '../adminStyles';
import VideoEntryForm from './VideoEntryForm';
import VideosContext from '../../contexts/VideosContext';
import { useContext } from 'react';
import ToastMessageContext from '../../contexts/ToastMessageContext';
import { remult } from 'remult';
import { Video } from '../../shared/Video';

interface MyFormProps {
  initialYouTubeId?: string;
  initialFormat?: string;
  initialTitleRu?: string;
  initialTitleEn?: string;
  initialDescriptionRu?: string;
  initialDescriptionEn?: string;
  initialCategory?: string;
  initialBrand?: string;
}

const VideoEditModal = ({ openModal, setOpenModal, video }: ModalProps) => {
  const { state, dispatch } = useContext(VideosContext);
  const { videos } = state;
  const { messageDispatch } = useContext(ToastMessageContext);

  const saveVideo = async (values: VideoData) => {
    try {
      const savedVideo = await remult
        .repo(Video)
        .save({ id: video?.id, ...values });

      dispatch({
        type: ActionKind.SET,
        payload: videos.map(video =>
          video.id === savedVideo.id ? savedVideo : video
        ),
      });

      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Информация о видео ${savedVideo.title_ru} обновлeна.`,
          kind: MessageKind.SUCCESS,
        },
      });

      setOpenModal(undefined);
    } catch (e) {
      let message = 'Something worng';
      if (e instanceof Error) {
        message += ' ' + e.message;
      }
      throw new Error(message);
    }
  };

  const insertVideo = async (values: VideoData) => {
    try {
      const newVideo = await remult.repo(Video).insert(values);

      dispatch({
        type: ActionKind.SET,
        payload: [...videos, newVideo],
      });

      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Видео ${newVideo.title_ru} сохранено.`,
          kind: MessageKind.SUCCESS,
        },
      });

      setOpenModal(undefined);
    } catch (e) {
      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Не удалось сохранить видео.`,
          kind: MessageKind.ERROR,
        },
      });
      let message = 'Something worng';
      if (e instanceof Error) {
        message += ' ' + e.message;
      }
      throw new Error(message);
    }
  };

  const MyForm = withFormik<MyFormProps, VideoFormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
      return {
        youtube_video_id: props.initialYouTubeId || '',
        format: props.initialFormat || '',
        title_ru: props.initialTitleRu || '',
        title_en: props.initialTitleEn || '',
        description_ru: props.initialDescriptionRu || '',
        description_en: props.initialDescriptionEn || '',
        category: props.initialCategory || '',
        brand: props.initialBrand || '',
      };
    },
    validationSchema: Yup.object({
      youtube_video_id: Yup.string().url().required('Обязательное поле'),
      format: Yup.string().required('Обязательное поле'),
      title_ru: Yup.string().required('Обязательное поле'),
      title_en: Yup.string(),
      description_ru: Yup.string(),
      description_en: Yup.string(),
      category: Yup.string(),
      brand: Yup.string(),
    }),
    handleSubmit: async formValues => {
      const values = await toVideo(formValues);

      if (video) {
        saveVideo(values);
      } else {
        insertVideo(values);
      }

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
      setOpenModal(undefined);
    },
  })(VideoEntryForm);

  return (
    <StyledModal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <StyledHeader>
        {video ? (
          <VideoTitle
            imageSrc={stillUrl(video.youtube_video_id)}
            title={video.title_en}
          />
        ) : (
          'Новое видео'
        )}
      </StyledHeader>
      <StyledBody>
        <MyForm
          initialYouTubeId={video?.youtube_video_id}
          initialFormat={video?.format.id}
          initialTitleRu={video?.title_ru}
          initialTitleEn={video?.title_en}
          initialDescriptionRu={video?.description_ru}
          initialDescriptionEn={video?.description_en}
          initialCategory={video?.category.id}
          initialBrand={video?.brand.id}
        />
      </StyledBody>
      <StyledFooter>
        <Button onClick={() => setOpenModal(undefined)}>Отмена</Button>
        <Button
          type='submit'
          form='videoForm'
        >
          Сохранить
        </Button>
      </StyledFooter>
    </StyledModal>
  );
};

export default VideoEditModal;
