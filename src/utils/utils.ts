import { remult } from 'remult';
import { VideoData, VideoFormValues } from '../types';
import { Brand } from '../shared/Brand';
import { Category } from '../shared/Category';
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
  try {
    const brands = await remult.repo(Brand).find({
      where: {
        id: values.brand,
      },
    });
    const categories = await remult.repo(Category).find({
      where: {
        id: values.category,
      },
    });

    const video = {
      url: values.url,
      title_ru: values.title_ru,
      title_en: values.title_en,
      description_ru: values.description_ru,
      description_en: values.description_en,
      brand: brands[0],
      category: categories[0],
      createdOn: new Date(),
      featured: false,
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
