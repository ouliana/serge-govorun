import * as Yup from 'yup';

import { ActionKind, BrandFormValues, ModalProps } from '../../types';
import { withFormik } from 'formik';
import {
  Button,
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

const BrandEditModal = ({ openModal, setOpenModal, brand }: ModalProps) => {
  const { state, dispatch } = useContext(BrandsContext);
  const { brands } = state;

  const saveBrand = async (values: BrandFormValues) => {
    try {
      const response = await remult
        .repo(Brand)
        .save({ id: brand?.id, ...values });

      dispatch({
        type: ActionKind.SET,
        payload: brands.map(brand =>
          brand.id === response.id ? response : brand
        ),
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

  const insertBrand = async (values: BrandFormValues) => {
    try {
      const newBrand = await remult.repo(Brand).insert(values);

      dispatch({
        type: ActionKind.SET,
        payload: [...brands, newBrand],
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
      if (brand) {
        saveBrand(values);
      } else {
        insertBrand(values);
      }
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

export default BrandEditModal;
