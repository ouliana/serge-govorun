import { FormikProps, Form } from 'formik';
import { Brand, BrandFormValues } from '../../types';
import {
  FieldWrapper,
  FieldsContainer,
  Error,
  ErrorPlaceholder,
  Label,
} from '../FormComponents/styles';
import { FormikTextField } from '../FormComponents';

interface OtherProps {
  brand?: Brand;
}

const BrandForm = (props: OtherProps & FormikProps<BrandFormValues>) => {
  const { touched, errors } = props;

  return (
    <Form id='brandForm'>
      <FieldsContainer>
        <FieldWrapper>
          {touched.brand_name_ru && errors.brand_name_ru ? (
            <Error>{errors.brand_name_ru}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='brand_name_ru'>Название бренда (RU)*</Label>
          <FormikTextField
            id='brand_name_ru'
            type='text'
            name='brand_name_ru'
          />
        </FieldWrapper>
        <FieldWrapper>
          {touched.brand_name_en && errors.brand_name_en ? (
            <Error>{errors.brand_name_en}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='brand_name_en'>Название бренда (EN)*</Label>
          <FormikTextField
            id='brand_name_en'
            type='text'
            name='brand_name_en'
          />
        </FieldWrapper>
      </FieldsContainer>
    </Form>
  );
};

export default BrandForm;
