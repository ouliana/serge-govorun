import * as Yup from 'yup';

import { CategoryFormValues, ModalProps } from '../../types';
import { withFormik } from 'formik';
import { Button } from '../theme';
import {
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledModal,
} from '../adminStyles';
import CategoryForm from './CategoryForm';

interface FormProps {
  initialNameRu?: string;
  initialNameEn?: string;
  initialIcon?: string;
}

const AdminVideoModal = ({ openModal, setOpenModal, category }: ModalProps) => {
  const MyForm = withFormik<FormProps, CategoryFormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
      return {
        category_name_ru: props.initialNameRu || '',
        category_name_en: props.initialNameEn || '',
        icon: props.initialIcon || '',
      };
    },
    validationSchema: Yup.object({
      category_name_ru: Yup.string().required('Обязательное поле'),
      category_name_en: Yup.string().required('Обязательное поле'),
      icon: Yup.string().required('Обязательное поле'),
    }),
    handleSubmit: values => {
      console.log('values: ', values);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setOpenModal(undefined);
      }, 400);
    },
  })(CategoryForm);

  return (
    <StyledModal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <StyledHeader>{category ? 'Редактирование' : 'Новое видео'}</StyledHeader>
      <StyledBody>
        <MyForm
          initialNameRu={category?.category_name_ru}
          initialNameEn={category?.category_name_en}
          initialIcon={category?.icon}
        />
      </StyledBody>
      <StyledFooter>
        <Button onClick={() => setOpenModal(undefined)}>Отмена</Button>
        <Button
          type='submit'
          form='categoryForm'
        >
          Сохранить
        </Button>
      </StyledFooter>
    </StyledModal>
  );
};

export default AdminVideoModal;
