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
