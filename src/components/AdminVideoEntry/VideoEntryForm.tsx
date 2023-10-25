import { FormikProps, Form, Field } from 'formik';
// import { object, string, date, boolean } from 'yup';
import { Error, ErrorPlaceholder, FieldWrapper } from '../theme';
import FormikTextField from './FormikTextField';
import { VideoFormValues } from '../../types';

const VideoEntryForm = (props: FormikProps<VideoFormValues>) => {
  const { errors } = props;

  return (
    <Form id='videoForm'>
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
        // disabled={isSubmitting}
        style={{ display: 'none' }}
      >
        Submit
      </button>
    </Form>
  );
};

export default VideoEntryForm;
