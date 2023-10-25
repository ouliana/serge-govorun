import { FormikProps, Form } from 'formik';
// import { object, string, date, boolean } from 'yup';
import {
  Error,
  ErrorPlaceholder,
  FieldWrapper,
  FieldsContainer,
  Label,
} from '../theme';
import FormikTextField from '../FormikTextField';
import { VideoFormValues } from '../../types';
// import { FormatWrapper } from './styles';
import FormikRadioButtons from '../FormikRadioButtons';

const VideoEntryForm = (props: FormikProps<VideoFormValues>) => {
  const { touched, errors } = props;

  const formatOptions = [
    { key: '16:9', value: '16:9' },
    { key: '9:16', value: '9:16' },
  ];

  return (
    <Form id='videoForm'>
      <FieldsContainer>
        <FieldWrapper>
          {touched.youtube_video_id && errors.youtube_video_id ? (
            <Error>{errors.youtube_video_id}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='youtube_video_id'>Ссылка на YouTube видео*</Label>
          <FormikTextField
            id='youtube_video_id'
            type='text'
            name='youtube_video_id'
          />
        </FieldWrapper>
        {/* Format radio buttons */}
        <FieldWrapper>
          {touched.format && errors.format ? (
            <Error>{errors.format}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <FormikRadioButtons
            label='Укажите формат*'
            name='format'
            options={formatOptions}
          />
        </FieldWrapper>

        {/* title_ru */}
        <FieldWrapper>
          {touched.title_ru && errors.title_ru ? (
            <Error>{errors.title_ru}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='title_ru'>Название (RU)*</Label>
          <FormikTextField
            id='title_ru'
            type='text'
            name='title_ru'
          />
        </FieldWrapper>

        {/* title_en */}
        <FieldWrapper>
          {touched.title_en && errors.title_en ? (
            <Error>{errors.title_en}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='title_en'>Название (EN)*</Label>
          <FormikTextField
            id='title_en'
            type='text'
            name='title_en'
          />
        </FieldWrapper>

        {/* description_ru */}
        <FieldWrapper>
          {touched.description_ru && errors.description_ru ? (
            <Error>{errors.description_ru}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='description_ru'>Описание (RU)</Label>
          <FormikTextField
            id='description_ru'
            type='text'
            name='description_ru'
          />
        </FieldWrapper>

        {/* description_en */}
        <FieldWrapper>
          {touched.description_en && errors.description_en ? (
            <Error>{errors.description_en}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='description_en'>Описание (EN)</Label>
          <FormikTextField
            id='description_en'
            type='text'
            name='description_en'
          />
        </FieldWrapper>
      </FieldsContainer>
    </Form>
  );
};

export default VideoEntryForm;
