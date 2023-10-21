import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormWrapper,
  Input,
  InputGroup,
  InputWrapper,
  StyledEye,
  StyledEyeOff,
  Error,
  ErrorPlaceholder,
  InputWithIcon,
} from '../theme';
import { useState } from 'react';

const AuthForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <InputGroup>
          <InputWrapper>
            {formik.errors.email ? (
              <Error>{formik.errors.email}</Error>
            ) : (
              <ErrorPlaceholder>No error</ErrorPlaceholder>
            )}
            <Input
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </InputWrapper>

          <InputWrapper>
            {formik.errors.password ? (
              <Error>{formik.errors.password}</Error>
            ) : (
              <ErrorPlaceholder>No error</ErrorPlaceholder>
            )}
            <InputWithIcon>
              <Input
                id='password'
                name='password'
                type={isPasswordHidden ? 'password' : 'text'}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {isPasswordHidden ? (
                <StyledEye
                  onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                />
              ) : (
                <StyledEyeOff
                  onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                />
              )}
            </InputWithIcon>
          </InputWrapper>
        </InputGroup>
        <Button type='submit'>Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default AuthForm;
