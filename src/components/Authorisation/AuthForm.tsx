import { useFormik } from 'formik';
import {
  Button,
  FormWrapper,
  Input,
  InputGroup,
  InputWrapper,
  Label,
  LabelWithIcon,
  StyledEye,
  StyledEyeOff,
} from '../theme';
import { useState } from 'react';

const AuthForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <InputGroup>
          <InputWrapper>
            <Label>
              <Input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Label>
          </InputWrapper>
          <InputWrapper>
            <LabelWithIcon>
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
            </LabelWithIcon>
          </InputWrapper>
        </InputGroup>
        <Button type='submit'>Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default AuthForm;
