import * as Yup from 'yup';

import { BrandFormValues, ModalProps } from '../../types';
import { withFormik } from 'formik';
import { Button } from '../theme';
import {
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledModal,
} from '../adminStyles';
import BrandForm from './BrandForm';

interface FormProps {
  initialNameRu?: string;
  initialNameEn?: string;
}

const BrandModal = ({ openModal, setOpenModal, brand }: ModalProps) => {
  const MyForm = withFormik<FormProps, BrandFormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
      return {
        brand_name_ru: props.initialNameRu || '',
        brand_name_en: props.initialNameEn || '',
      };
    },
    validationSchema: Yup.object({
      brand_name_ru: Yup.string().required('Обязательное поле'),
      brand_name_en: Yup.string().required('Обязательное поле'),
    }),
    handleSubmit: values => {
      console.log('values: ', values);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setOpenModal(undefined);
      }, 400);
    },
  })(BrandForm);

  return (
    <StyledModal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <StyledHeader>{brand ? 'Редактирование' : 'Новый бренд'}</StyledHeader>
      <StyledBody>
        <MyForm
          initialNameRu={brand?.brand_name_ru}
          initialNameEn={brand?.brand_name_en}
        />
      </StyledBody>
      <StyledFooter>
        <Button onClick={() => setOpenModal(undefined)}>Отмена</Button>
        <Button
          type='submit'
          form='brandForm'
        >
          Сохранить
        </Button>
      </StyledFooter>
    </StyledModal>
  );
};

export default BrandModal;
