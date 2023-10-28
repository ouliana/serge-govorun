import { FormikProps, Form } from 'formik';
import { CategoryFormValues } from '../../types';
import {
  FieldWrapper,
  FieldsContainer,
  Error,
  ErrorPlaceholder,
  Label,
} from '../FormComponents/styles';
import { FormikTextField } from '../FormComponents';
import { Category } from '../../shared/Category';

interface OtherProps {
  category?: Category;
}

const CategoryForm = (props: OtherProps & FormikProps<CategoryFormValues>) => {
  const { touched, errors } = props;

  return (
    <Form id='categoryForm'>
      <FieldsContainer>
        <FieldWrapper>
          {touched.category_name_ru && errors.category_name_ru ? (
            <Error>{errors.category_name_ru}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='category_name_ru'>Название категории (RU)*</Label>
          <FormikTextField
            id='category_name_ru'
            type='text'
            name='category_name_ru'
          />
        </FieldWrapper>

        <FieldWrapper>
          {touched.category_name_en && errors.category_name_en ? (
            <Error>{errors.category_name_en}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='category_name_en'>Название категории (EN)*</Label>
          <FormikTextField
            id='category_name_en'
            type='text'
            name='category_name_en'
          />
        </FieldWrapper>

        <FieldWrapper>
          {touched.icon && errors.icon ? (
            <Error>{errors.icon}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='icon'>Название иконки*</Label>
          <FormikTextField
            id='icon'
            type='text'
            name='icon'
          />
        </FieldWrapper>
      </FieldsContainer>
    </Form>
  );
};

export default CategoryForm;
