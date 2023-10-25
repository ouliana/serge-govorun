import { withFormik, FormikProps, Form, Field } from 'formik';
// import { object, string, date, boolean } from 'yup';
import * as Yup from 'yup';
import { Error, ErrorPlaceholder, FieldWrapper } from '../theme';
import FormikTextField from './FormikTextField';

interface FormValues {
  youtube_video_id: string;
  format: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { errors, isSubmitting } = props;
  return (
    <Form>
      <FieldWrapper>
        {errors.youtube_video_id ? (
          <Error>{errors.youtube_video_id}</Error>
        ) : (
          <ErrorPlaceholder>No error</ErrorPlaceholder>
        )}
        <label htmlFor='youtube_video_id'>Ссылка на YouTube видео</label>
        <FormikTextField
          id='youtube_video_id'
          type='text'
          name='youtube_video_id'
        />
      </FieldWrapper>

      <div
        role='group'
        aria-labelledby='format-radio-group'
      >
        <label>
          <Field
            type='radio'
            name='format'
            value='16:9'
          />
          16:9
        </label>
        <label>
          <Field
            type='radio'
            name='format'
            value='9:16'
          />
          9:16
        </label>
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
      >
        Submit
      </button>
    </Form>
  );
};

interface MyFormProps {
  initialYouTubeId?: string;
  initialFormat: '16:9';
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      youtube_video_id: props.initialYouTubeId || '',
      format: props.initialFormat || '16:9',
    };
  },
  validationSchema: Yup.object({
    youtube_video_id: Yup.string().url().required('Required'),
    format: Yup.string().required('Required'),
  }),
  handleSubmit: values => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  },
})(InnerForm);

const EditForm = () => {
  return <MyForm initialFormat={'16:9'} />;
};

export default EditForm;
