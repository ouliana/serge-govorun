import { Video, VideoData, VideoFormValues } from '../types';
import { urlToVideoId } from './urlToVideoId';

export const isRussianLanguage = (lan: string): boolean =>
  lan.split('-').includes('ru');

export const initialValues = {
  video_id: '',
  format: '',
  title_ru: '',
  title_en: '',
  description_ru: '',
  description_en: '',
  category: '',
  brand: '',
  createdOn: new Date(),
  featured: false,
};

export const toEmbeddedUrl = (url: string | undefined) => {
  if (!url) return '';
  const videoId = urlToVideoId(url);
  return `https://www.youtube.com/embed/${videoId}`;
};

export const toStillUrl = (url: string): string => {
  if (!url)
    throw new Error('Could not convert to embedded url, url is missing');
  const videoId = urlToVideoId(url);
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

export const isWideScreen = (url: string) => {
  const regexp = /shorts/i;
  return !regexp.test(url);
};

export const toVideo = async (values: VideoFormValues): Promise<VideoData> => {
  console.log(values);
  try {
    // const brands = await remult.repo(Brand).find({
    //   where: {
    //     id: values.brand,
    //   },
    // });
    // const categories = await remult.repo(Category).find({
    //   where: {
    //     id: values.category,
    //   },
    // });
    const brand = {
      id: '',
      brand_name_ru: '',
      brand_name_en: '',
    };

    const category = {
      id: '',
      category_name_ru: '',
      category_name_en: '',
      icon: '',
      route: '',
    };

    const video = {
      url: values.url,
      title_ru: values.title_ru,
      title_en: values.title_en,
      description_ru: values.description_ru,
      description_en: values.description_en,
      brand,
      category: category,
      createdOn: new Date(),
      featured: false,
      video_order: 0,
    };

    return video;
  } catch (e) {
    let message = 'Error in toVideo';
    if (e instanceof Error) {
      message += ' ' + e.message;
    }
    throw new Error(message);
  }
};

export const compareFn = (v1: Video, v2: Video): number => {
  return v2.video_order - v1.video_order;
};
