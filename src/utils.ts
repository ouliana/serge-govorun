import { remult } from 'remult';
import { VideoData, VideoFormValues } from './types';
import { Brand } from './shared/Brand';
import { Category } from './shared/Category';

export const videoUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};

export const stillUrl = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

export const isRussianLanguage = (lan: string): boolean =>
  lan.split('-').includes('ru');

export const initialValues = {
  youtube_video_id: '',
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

export const urlToVodeoId = (url: string) => {
  const part = url.match(/\/[_a-zA-Z0-9]{1,}\?/i);
  if (!part) {
    throw new Error(`Невозможно выделить VideoId в ${url}`);
  }

  return part[0].slice(1, part[0].length - 1);
};

export const toEmbeddedUrl = (url: string | undefined) => {
  if (!url) return '';
  const videoId = urlToVodeoId(url);
  return `https://www.youtube.com/embed/${videoId}`;
};

export const toStillUrl = (url: string): string => {
  if (!url)
    throw new Error('Could not convert to embedded url, url is missing');
  const videoId = urlToVodeoId(url);
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

export const isWideScreen = (url: string) => {
  //   let str = "I love JavaScript";
  // let regexp = /LOVE/i;

  // alert( regexp.test(str) );
  return !/shorts/i.test(url);
};

export const toVideo = async (values: VideoFormValues): Promise<VideoData> => {
  console.log('values: ', values);
  try {
    const brands = await remult.repo(Brand).find({
      where: {
        id: values.brand,
      },
    });
    console.log('brands: ', brands);
    const categories = await remult.repo(Category).find({
      where: {
        id: values.category,
      },
    });
    console.log('categories: ', categories);

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
