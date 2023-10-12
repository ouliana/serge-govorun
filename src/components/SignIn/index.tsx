import * as Yup from 'yup';
import {
  Formik,
  //  FormikHelpers,
  //  FormikProps,
  Form,
  //  FieldProps,
} from 'formik';
import { StyledInput, StyledInputContainer } from '../theme';

interface SignInValues {
  email: string;
  password: string;
}

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const SigninSchema = Yup.object().shape({
  email: Yup.string().email().required('Обязательное поле'),
  password: Yup.string().required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(passwordRules, 'min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.')
});

const SignIn = () => {
  const initialValues: SignInValues = { email: '', password: '' };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SigninSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <StyledInputContainer>
            {errors.email && touched.email
                ? (<div>{errors.email}</div>)
                : null}
              <StyledInput
                id='email'
                name='email'
                placeholder='email'
              />
            </StyledInputContainer>
            <StyledInputContainer>
              {errors.password && touched.password
                ? (<div>{errors.password}</div>)
                : null}
              <StyledInput
                id='password'
                name='password'
                placeholder='password'
              />
            </StyledInputContainer>
          <button type='submit'>Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
