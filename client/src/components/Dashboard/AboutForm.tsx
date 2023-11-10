import { FormikProps, Form } from 'formik';
import {
  FieldWrapper,
  Error,
  ErrorPlaceholder,
} from '../FormComponents/styles';
import { FormikTextareaField } from '../FormComponents';
import { Brand, ParagraphFormValues } from '../../types';
import { FieldsGrid } from './styles';

interface OtherProps {
  brand?: Brand;
}

const AboutForm = (props: OtherProps & FormikProps<ParagraphFormValues>) => {
  const { touched, errors } = props;

  return (
    <Form id='AboutForm'>
      <FieldsGrid>
        {/* row 1 */}
        <FieldWrapper>
          {touched.paragraph_1_ru && errors.paragraph_1_ru ? (
            <Error>{errors.paragraph_1_ru}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <FormikTextareaField name='paragraph_1_ru' />
        </FieldWrapper>
        <FieldWrapper>
          {touched.paragraph_1_en && errors.paragraph_1_en ? (
            <Error>{errors.paragraph_1_en}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <FormikTextareaField name='paragraph_1_en' />
        </FieldWrapper>

        {/* row 2 */}
        <FieldWrapper>
          {touched.paragraph_2_ru && errors.paragraph_2_ru ? (
            <Error>{errors.paragraph_2_ru}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <FormikTextareaField name='paragraph_2_ru' />
        </FieldWrapper>
        <FieldWrapper>
          {touched.paragraph_2_en && errors.paragraph_2_en ? (
            <Error>{errors.paragraph_2_en}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <FormikTextareaField name='paragraph_2_en' />
        </FieldWrapper>

        {/* row 3 */}
        <FieldWrapper>
          {touched.paragraph_3_ru && errors.paragraph_3_ru ? (
            <Error>{errors.paragraph_3_ru}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <FormikTextareaField name='paragraph_3_ru' />
        </FieldWrapper>
        <FieldWrapper>
          {touched.paragraph_3_en && errors.paragraph_3_en ? (
            <Error>{errors.paragraph_3_en}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <FormikTextareaField name='paragraph_3_en' />
        </FieldWrapper>
      </FieldsGrid>
    </Form>
  );
};

export default AboutForm;
