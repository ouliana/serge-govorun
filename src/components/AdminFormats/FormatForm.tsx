import { FormikProps, Form } from 'formik';
import {
  FieldWrapper,
  FieldsContainer,
  Error,
  ErrorPlaceholder,
  Label,
} from '../FormComponents/styles';
import { FormikTextField } from '../FormComponents';
import { Format } from '../../shared/Format';
import { FormatFormValues } from '../../types';

interface OtherProps {
  format?: Format;
}

const BrandForm = (props: OtherProps & FormikProps<FormatFormValues>) => {
  const { touched, errors } = props;

  return (
    <Form id='formatForm'>
      <FieldsContainer>
        <FieldWrapper>
          {touched.format_name && errors.format_name ? (
            <Error>{errors.format_name}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='format_name'>Название формата*</Label>
          <FormikTextField
            id='format_name'
            type='text'
            name='format_name'
          />
        </FieldWrapper>
      </FieldsContainer>
    </Form>
  );
};

export default BrandForm;
