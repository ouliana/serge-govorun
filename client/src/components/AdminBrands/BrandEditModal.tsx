import * as Yup from 'yup';

import {
  ActionKind,
  BrandFormValues,
  MessageKind,
  ModalProps,
} from '../../types';
import { withFormik } from 'formik';
import {
  Button,
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledModal,
} from '../adminStyles';
import BrandForm from './BrandForm';
import { useContext } from 'react';
import ToastMessageContext from '../../contexts/ToastMessageContext';

interface FormProps {
  initialNameRu?: string;
  initialNameEn?: string;
}

const BrandEditModal = ({ openModal, setOpenModal, brand }: ModalProps) => {
  // const { state, dispatch } = useContext(BrandsContext);
  // const { brands } = state;
  const { messageDispatch } = useContext(ToastMessageContext);

  const saveBrand = async (values: BrandFormValues) => {
    console.log(values);
    try {
      // const savedBrand = await remult
      //   .repo(Brand)
      //   .save({ id: brand?.id, ...values });

      // dispatch({
      //   type: ActionKind.SET,
      //   payload: brands.map(brand =>
      //     brand.id === savedBrand.id ? savedBrand : brand
      //   ),
      // });

      // messageDispatch({
      //   type: ActionKind.SET,
      //   payload: {
      //     content: `Бренд ${savedBrand.brand_name_ru} обновлён.`,
      //     kind: MessageKind.SUCCESS,
      //   },
      // });

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
    console.log(values);
    try {
      // const newBrand = await remult.repo(Brand).insert(values);

      // dispatch({
      //   type: ActionKind.SET,
      //   payload: [...brands, newBrand],
      // });

      // messageDispatch({
      //   type: ActionKind.SET,
      //   payload: {
      //     content: `Бренд ${newBrand.brand_name_ru} успешно сохранён.`,
      //     kind: MessageKind.SUCCESS,
      //   },
      // });

      setOpenModal(undefined);
    } catch (e) {
      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Не удалось сохранить бренд.`,
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
