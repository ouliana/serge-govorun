import * as Yup from 'yup';

import { VideoFormValues, ModalProps } from '../../types';
import { withFormik } from 'formik';
import VideoEntryForm from './VideoEntryForm';
import { Button } from '../theme';
import { StyledBody, StyledFooter, StyledHeader, StyledModal } from './styles';
import VideoTitle from '../AdminVideo/VideoTitle';
import { stillUrl } from '../../utils';

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

const AdminVideoEntry = ({ openModal, setOpenModal, video }: ModalProps) => {
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
    handleSubmit: values => {
      console.log('values: ', values);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setOpenModal(undefined);
      }, 400);
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

export default AdminVideoEntry;
