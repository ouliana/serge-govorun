import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { object, string } from 'yup';

import { useState } from 'react';
import { UserCredentials } from '../../types';
import {
  FormWrapper,
  InputGroup,
  InputWrapper,
  Error,
  ErrorPlaceholder,
  Input,
  InputWithIcon,
  StyledEye,
  StyledEyeOff,
} from '../FormComponents/styles';
import { Button } from '../adminStyles';
import { ButtonGroup, Container } from './styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  handleSignIn: (values: UserCredentials) => Promise<void>;
}

const AuthForm = ({ handleSignIn }: Props) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: object().shape({
      username: string().required('Required'),
      password: string().required('Required'),
    }),
    onSubmit: async values => {
      handleSignIn(values);
    },
  });
  return (
    <Container>
      <FormWrapper>
        <h5>Авторизация</h5>
        <form
          id='loginForm'
          onSubmit={formik.handleSubmit}
        >
          <InputGroup>
            <InputWrapper>
              {formik.errors.username ? (
                <Error>{formik.errors.username}</Error>
              ) : (
                <ErrorPlaceholder>No error</ErrorPlaceholder>
              )}
              <Input
                id='username'
                name='username'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.username}
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
        </form>
        <ButtonGroup>
          <Button onClick={() => navigate('/')}>Отмена</Button>
          <Button
            type='submit'
            form='loginForm'
          >
            Войти
          </Button>
        </ButtonGroup>
      </FormWrapper>
    </Container>
  );
};

export default AuthForm;
