import * as Yup from 'yup';

import { FormatFormValues, ModalProps } from '../../types';
import { withFormik } from 'formik';
import {
  Button,
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledModal,
} from '../adminStyles';
import FormatForm from './FormatForm';

interface FormProps {
  initialName?: string;
}

const FormatModal = ({ openModal, setOpenModal, format }: ModalProps) => {
  const MyForm = withFormik<FormProps, FormatFormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
      return {
        format_name: props.initialName || '',
      };
    },
    validationSchema: Yup.object({
      format_name: Yup.string().required('Обязательное поле'),
    }),
    handleSubmit: values => {
      console.log('values: ', values);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setOpenModal(undefined);
      }, 400);
    },
  })(FormatForm);

  return (
    <StyledModal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <StyledHeader>{format ? 'Редактирование' : 'Новый бренд'}</StyledHeader>
      <StyledBody>
        <MyForm initialName={format?.format_name} />
      </StyledBody>
      <StyledFooter>
        <Button onClick={() => setOpenModal(undefined)}>Отмена</Button>
        <Button
          type='submit'
          form='formatForm'
        >
          Сохранить
        </Button>
      </StyledFooter>
    </StyledModal>
  );
};

export default FormatModal;
