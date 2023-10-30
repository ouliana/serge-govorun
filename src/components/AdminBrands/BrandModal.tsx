import * as Yup from 'yup';

import { ActionKind, BrandFormValues, ModalProps } from '../../types';
import { withFormik } from 'formik';
import { Button } from '../theme';
import {
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledModal,
} from '../adminStyles';
import BrandForm from './BrandForm';
import { Brand } from '../../shared/Brand';
import { remult } from 'remult';
import { useContext } from 'react';
import BrandsContext from '../../contexts/BrandsContext';

interface FormProps {
  initialNameRu?: string;
  initialNameEn?: string;
}

const BrandModal = ({ openModal, setOpenModal, brand }: ModalProps) => {
  const { dispatch } = useContext(BrandsContext);

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
    handleSubmit: async values => {
      try {
        await remult.repo(Brand).save({ id: brand?.id, ...values });
        const data = await remult.repo(Brand).find();
        dispatch({
          type: ActionKind.SET,
          payload: data,
        });
      } catch (e) {
        let message = 'Something worng';
        if (e instanceof Error) {
          message += ' ' + e.message;
        }
        throw new Error(message);
      }

      setOpenModal(undefined);
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
