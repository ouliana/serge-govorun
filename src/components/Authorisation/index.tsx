import { useState } from 'react';
import { useFormik } from 'formik';
import {
  Input,
  InputContainer,
  Error,
  Button,
  FormContainer,
  Label,
  ErrorInputStyle,
  StyledEye,
  StyledEyeOff,
  LabelWithIcon,
  Page,
  ErrorPlaceholder,
  InputGroup,
} from '../theme';
import { Container } from './styles';

interface SignInValues {
  email: string;
  password: string;
}

const validate = (values: SignInValues) => {
  const errors: SignInValues = { email: '', password: '' };

  const passwordRules = /[<>!?]$/;

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.match(passwordRules)) {
    errors.password = 'Invalid password';
  }

  return errors;
};

const Authorisation = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Page>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <FormContainer>
            <InputGroup>
              <InputContainer>
                <Label>
                  {formik.errors.email ? (
                    <Error>{formik.errors.email}</Error>
                  ) : (
                    <ErrorPlaceholder>No error</ErrorPlaceholder>
                  )}
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='name@gmail.com'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={formik.errors.email ? ErrorInputStyle : ''}
                  />
                </Label>
              </InputContainer>
              <InputContainer>
                {formik.errors.password ? (
                  <Error>{formik.errors.password}</Error>
                ) : (
                  <ErrorPlaceholder>No error</ErrorPlaceholder>
                )}
                <LabelWithIcon>
                  <Input
                    id='password'
                    name='password'
                    type={isPasswordHidden ? 'password' : 'text'}
                    placeholder='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={formik.errors.password ? ErrorInputStyle : ''}
                  />
                  {isPasswordHidden ? (
                    <StyledEye
                      onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                      // className='cursor-pointer w-6 h-6 absolute top-1/2  right-4'
                    />
                  ) : (
                    <StyledEyeOff
                      onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                      // className='cursor-pointer w-6 h-6 absolute top-1/2  right-4'
                    />
                  )}
                </LabelWithIcon>
              </InputContainer>
            </InputGroup>
            <Button type='submit'>Войти</Button>
          </FormContainer>
        </form>
      </Container>
    </Page>
  );
};

export default Authorisation;
