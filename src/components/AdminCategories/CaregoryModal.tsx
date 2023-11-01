import * as Yup from 'yup';

import {
  ActionKind,
  CategoryFormValues,
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
import CategoryForm from './CategoryForm';
import { useContext } from 'react';
import CategoryContext from '../../contexts/CategoryContext';
import ToastMessageContext from '../../contexts/ToastMessageContext';
import { remult } from 'remult';
import { Category } from '../../shared/Category';

interface CategoryFormProps {
  initialNameRu?: string;
  initialNameEn?: string;
  initialIcon?: string;
  initialRoute?: string;
}

const CaregoryModal = ({ openModal, setOpenModal, category }: ModalProps) => {
  const { state, dispatch } = useContext(CategoryContext);
  const { categories } = state;
  const { messageDispatch } = useContext(ToastMessageContext);

  const saveCategory = async (values: CategoryFormValues) => {
    try {
      const savedCategory = await remult
        .repo(Category)
        .save({ id: category?.id, ...values });

      dispatch({
        type: ActionKind.SET,
        payload: categories.map(category =>
          category.id === savedCategory.id ? savedCategory : category
        ),
      });

      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Категория ${savedCategory.category_name_ru} обновлена.`,
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

  const insertCategory = async (values: CategoryFormValues) => {
    try {
      const newCategory = await remult.repo(Category).insert(values);

      dispatch({
        type: ActionKind.SET,
        payload: [...categories, newCategory],
      });

      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Категория ${newCategory.category_name_ru} успешно сохранена.`,
          kind: MessageKind.SUCCESS,
        },
      });

      setOpenModal(undefined);
    } catch (e) {
      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Не удалось сохранить категорию.`,
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

  const MyForm = withFormik<CategoryFormProps, CategoryFormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
      return {
        category_name_ru: props.initialNameRu || '',
        category_name_en: props.initialNameEn || '',
        icon: props.initialIcon || '',
        route: props.initialRoute || '',
      };
    },
    validationSchema: Yup.object({
      category_name_ru: Yup.string().required('Обязательное поле'),
      category_name_en: Yup.string().required('Обязательное поле'),
      icon: Yup.string().required('Обязательное поле'),
      route: Yup.string().required('Обязательное поле'),
    }),
    handleSubmit: values => {
      if (category) {
        saveCategory(values);
      } else {
        insertCategory(values);
      }
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
      <StyledHeader>
        {category ? 'Редактирование' : 'Новая категория'}
      </StyledHeader>
      <StyledBody>
        <MyForm
          initialNameRu={category?.category_name_ru}
          initialNameEn={category?.category_name_en}
          initialIcon={category?.icon}
          initialRoute={category?.route}
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

export default CaregoryModal;
