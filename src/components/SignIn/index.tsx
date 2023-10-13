import { useState } from 'react'
import { useFormik } from 'formik';
import { Input, InputContainer, Error, Button, FormContainer, Label, ErrorInputStyle, StyledEye, StyledEyeOff, LabelWithIcon } from '../theme';


interface SignInValues {
  email: string;
  password: string;
}

const validate = (values: SignInValues) => {
  const errors: SignInValues = { email: '', password: '' };
  
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!values.password.match(passwordRules)) {
    errors.password = 'min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.';
  }

  return errors;
};

const SignInForm = () => {
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
    <form onSubmit={formik.handleSubmit}>

      <FormContainer>
        <InputContainer>
          <Label>E-Mail:
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@gmail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={formik.errors.email ? ErrorInputStyle : ""}

          />
          {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
          </Label>

        </InputContainer>
        <InputContainer>
        <LabelWithIcon>Пароль:
          <Input
            id="password"
            name="password"
            type={isPasswordHidden ? "password" : "text"}
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={formik.errors.password ? ErrorInputStyle : ""}
          />
        {formik.errors.password ? <Error>{formik.errors.password}</Error> : null}
            {isPasswordHidden &&
              <StyledEye
                onClick={()=> setIsPasswordHidden(!isPasswordHidden)}
                className="cursor-pointer w-6 h-6 absolute top-1/2  right-4" />}
            {!isPasswordHidden &&
              <StyledEyeOff
              onClick={()=> setIsPasswordHidden(!isPasswordHidden)}
                className="cursor-pointer w-6 h-6 absolute top-1/2  right-4" />}
        </LabelWithIcon>
        </InputContainer>
        <Button type="submit">Войти</Button>
      </FormContainer>
    </form>
  );
};

export default SignInForm;