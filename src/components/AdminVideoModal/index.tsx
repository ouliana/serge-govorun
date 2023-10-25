import * as Yup from 'yup';

import { VideoFormValues, ModalProps } from '../../types';
import { withFormik } from 'formik';
import VideoEntryForm from './VideoEntryForm';
import { Modal } from 'flowbite-react';
import { Button } from '../theme';
import { StyledFooter } from './styles';

interface MyFormProps {
  initialYouTubeId?: string;
  initialFormat?: string;
  initialTitleRu?: string;
  initialTitleEn?: string;
  initialDescriptionRu?: string;
  initialDescriptionEn?: string;
}

const AdminVideoEntry = ({
  openModal,
  setOpenModal,
  headerText,
}: ModalProps) => {
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
      };
    },
    validationSchema: Yup.object({
      youtube_video_id: Yup.string().url().required('Обязательное поле'),
      format: Yup.string().required('Обязательное поле'),
      title_ru: Yup.string().required('Обязательное поле'),
      title_en: Yup.string(),
      description_ru: Yup.string(),
      description_en: Yup.string(),
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
    <Modal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <Modal.Header>{headerText ? headerText : 'Новое видео'}</Modal.Header>
      <Modal.Body>
        <MyForm />
      </Modal.Body>
      <StyledFooter>
        <Button onClick={() => setOpenModal(undefined)}>Отмена</Button>
        <Button
          type='submit'
          form='videoForm'
        >
          Сохранить
        </Button>
      </StyledFooter>
    </Modal>
  );
};

export default AdminVideoEntry;
