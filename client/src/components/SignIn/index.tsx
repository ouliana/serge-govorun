import { useFormik } from 'formik';
import { object, string } from 'yup';

import { UserCredentials } from '../../types';
import {
  FormWrapper,
  InputGroup,
  InputWrapper,
  Error,
  ErrorPlaceholder,
  Input,
} from '../FormComponents/styles';
import { SignInButton } from '../adminStyles';
import { ButtonGroup, Container } from './styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  handleSignIn: (values: UserCredentials) => Promise<void>;
}

const AuthForm = ({ handleSignIn }: Props) => {
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
              <Input
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </InputWrapper>
          </InputGroup>
        </form>
        <ButtonGroup>
          <SignInButton onClick={() => navigate('/')}>Отмена</SignInButton>
          <SignInButton
            type='submit'
            form='loginForm'
          >
            Войти
          </SignInButton>
        </ButtonGroup>
      </FormWrapper>
    </Container>
  );
};

export default AuthForm;
