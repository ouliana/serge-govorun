import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { object, string } from 'yup';
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
import { UserCredentials } from '../../types';

interface Props {
  handleSignIn: (values: UserCredentials) => Promise<void>;
}

const AuthForm = ({ handleSignIn }: Props) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

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
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
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
        <Button type='submit'>Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default AuthForm;
