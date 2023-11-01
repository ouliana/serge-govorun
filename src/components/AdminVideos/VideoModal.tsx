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
import { toStillUrl, toVideo } from '../../utils';
import {
  Button,
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledModal,
} from '../adminStyles';
import VideosContext from '../../contexts/VideosContext';
import { useContext, useEffect, useState } from 'react';
import ToastMessageContext from '../../contexts/ToastMessageContext';
import { remult } from 'remult';
import { Video } from '../../shared/Video';
import VideoForm from './VideoForm';
import useCategory from '../../hooks/useCategory';
import useBrand from '../../hooks/useBrand';

interface VideoFormProps {
  initialUrl?: string;
  initialTitleRu?: string;
  initialTitleEn?: string;
  initialDescriptionRu?: string;
  initialDescriptionEn?: string;
  initialCategory?: string;
  initialBrand?: string;
}

const VideoModal = ({ openModal, setOpenModal, video }: ModalProps) => {
  const { state, dispatch } = useContext(VideosContext);
  const { videos } = state;
  const { messageDispatch } = useContext(ToastMessageContext);

  const [initialCategory, setInitialCategory] = useState('');
  const [initialBrand, setInitialBrand] = useState('');

  const { categories } = useCategory();
  const { brands } = useBrand();

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

  const MyForm = withFormik<VideoFormProps, VideoFormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
      return {
        url: props.initialUrl || '',
        title_ru: props.initialTitleRu || '',
        title_en: props.initialTitleEn || '',
        description_ru: props.initialDescriptionRu || '',
        description_en: props.initialDescriptionEn || '',
        category: props.initialCategory || '',
        brand: props.initialBrand || '',
      };
    },
    validationSchema: Yup.object({
      url: Yup.string().url().required('Обязательное поле'),
      title_ru: Yup.string().required('Обязательное поле'),
      title_en: Yup.string(),
      description_ru: Yup.string(),
      description_en: Yup.string(),
      category: Yup.string(),
      brand: Yup.string(),
    }),
    handleSubmit: async formValues => {
      console.log('formValues: ', formValues);
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
  })(VideoForm);

  useEffect(() => {
    if (categories.length) {
      console.log('categories: ', categories);
      setInitialCategory(categories[0].id);
    }
  }, [categories]);

  useEffect(() => {
    if (brands.length) {
      setInitialBrand(brands[0].id);
    }
  }, [brands]);

  return (
    <StyledModal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <StyledHeader>
        {video ? (
          <VideoTitle
            imageSrc={toStillUrl(video.url)}
            title={video.title_en}
          />
        ) : (
          'Новое видео'
        )}
      </StyledHeader>
      <StyledBody>
        <MyForm
          initialUrl={video?.url}
          initialTitleRu={video?.title_ru}
          initialTitleEn={video?.title_en}
          initialDescriptionRu={video?.description_ru}
          initialDescriptionEn={video?.description_en}
          initialCategory={
            video?.category.id ? video?.category.id : initialCategory
          }
          initialBrand={video?.brand.id ? video?.brand.id : initialBrand}
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

export default VideoModal;
