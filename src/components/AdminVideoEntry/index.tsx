import { customTheme } from './styles';
import * as Yup from 'yup';

import { VideoFormValues, ModalProps } from '../../types';
import { withFormik } from 'formik';
import VideoEntryForm from './VideoEntryForm';
import { Modal } from 'flowbite-react';

interface MyFormProps {
  initialYouTubeId?: string;
  initialFormat?: string;
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
        format: props.initialFormat || '16:9',
      };
    },
    validationSchema: Yup.object({
      youtube_video_id: Yup.string().url().required('Required'),
      format: Yup.string().required('Required'),
    }),
    handleSubmit: values => {
      console.log('values: ', values);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 400);
    },
  })(VideoEntryForm);

  return (
    <Modal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
      theme={customTheme}
    >
      <Modal.Header>{headerText ? headerText : 'Новое видео'}</Modal.Header>
      <Modal.Body>
        <MyForm />
      </Modal.Body>
      <Modal.Footer>
        <button
          type='submit'
          form='videoForm'
        >
          I accept
        </button>
        {/* <button onClick={() => setOpenModal(undefined)}>I accept</button> */}
        <button
          color='gray'
          onClick={() => setOpenModal(undefined)}
        >
          Decline
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdminVideoEntry;
