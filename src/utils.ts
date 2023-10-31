import { remult } from 'remult';
import { VideoData, VideoFormValues } from './types';
import { Format } from './shared/Format';
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
  return part[0].slice(1, part.length - 1);
};

export const isWideScreen = (url: string) => {
  //   let str = "I love JavaScript";
  // let regexp = /LOVE/i;

  // alert( regexp.test(str) );
  return !/shorts/i.test(url);
};

export const toVideo = async (values: VideoFormValues): Promise<VideoData> => {
  try {
    const format = await remult.repo(Format).find({
      where: {
        format_name: values.format,
      },
    });
    const brand = await remult.repo(Brand).find({
      where: {
        brand_name_ru: values.brand,
      },
    });
    const category = await remult.repo(Category).find({
      where: {
        category_name_ru: values.category,
      },
    });
    const video = {
      youtube_video_id: urlToVodeoId(values.youtube_video_id),
      format: format[0],
      title_ru: values.title_ru,
      title_en: values.title_en,
      description_ru: values.description_ru,
      description_en: values.description_en,
      brand: brand[0],
      category: category[0],
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
