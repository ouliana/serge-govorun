import { useEffect, useState } from 'react';
import { FormikProps, Form } from 'formik';
import { VideoFormValues } from '../../types';
import {
  FieldWrapper,
  FieldsContainer,
  Error,
  ErrorPlaceholder,
  Label,
} from '../FormComponents/styles';
import { FormikSelect, FormikTextField } from '../FormComponents';
import { Video } from '../../shared/Video';
import useCategory from '../../hooks/useCategory';
import useBrand from '../../hooks/useBrand';

interface OtherProps {
  video?: Video;
}

interface Options {
  key: string;
  value: string;
}

const VideoForm = (props: OtherProps & FormikProps<VideoFormValues>) => {
  const { touched, errors } = props;

  const { categories } = useCategory();
  const { brands } = useBrand();

  const [сategoryOptions, setCategoryOptions] = useState<Options[]>([]);
  const [brandOptions, setBrandOptions] = useState<Options[]>([]);

  useEffect(() => {
    if (categories) {
      setCategoryOptions(
        categories.map(c => {
          return { key: c.category_name_ru, value: c.id };
        })
      );
    }
  }, [categories]);

  useEffect(() => {
    if (brands) {
      setBrandOptions(
        brands.map(b => {
          return { key: b.brand_name_ru, value: b.id };
        })
      );
    }
  }, [brands]);

  return (
    <Form id='videoForm'>
      <FieldsContainer>
        <FieldWrapper>
          {touched.url && errors.url ? (
            <Error>{errors.url}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <Label htmlFor='url'>Ссылка на YouTube видео*</Label>
          <FormikTextField
            id='url'
            type='text'
            name='url'
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

        {/*  Category select */}
        <FieldWrapper>
          {touched.category && errors.category ? (
            <Error>{errors.category}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <FormikSelect
            label='Категория*'
            name='category'
            options={сategoryOptions}
          />
        </FieldWrapper>

        {/*  Brand select */}
        <FieldWrapper>
          {touched.brand && errors.brand ? (
            <Error>{errors.brand}</Error>
          ) : (
            <ErrorPlaceholder>No error</ErrorPlaceholder>
          )}
          <FormikSelect
            label='Бренд'
            name='brand'
            options={brandOptions}
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

export default VideoForm;
