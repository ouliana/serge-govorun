import { Dispatch, SetStateAction } from 'react';
import { Video } from './shared/Video';
import { Category } from './shared/Category';
import { Brand } from './shared/Brand';
import { Format } from './shared/Format';

export enum UserActionKind {
  SIGNEDIN = 'SIGNEDIN',
  CLEAR = 'CLEAR',
}

export interface User {
  username: string;
}
export interface Action {
  type: UserActionKind;
  payload?: User;
}

export interface State {
  user: User;
}
export interface UserCredentials {
  username: string;
  password: string;
}

export interface VideoFormValues {
  youtube_video_id: string;
  format: string;
  title_ru: string;
  title_en: string;
  description_ru: string;
  description_en: string;
  category: string;
  brand: string;
  // createdOn: Date;
  // featured: false;
}

export interface CategoryFormValues {
  category_name_ru: string;
  category_name_en: string;
  icon: string;
}

export interface BrandFormValues {
  brand_name_ru: string;
  brand_name_en: string;
}
export interface FormatFormValues {
  format_name: string;
}

export interface ModalProps {
  openModal: string | undefined;
  setOpenModal: Dispatch<SetStateAction<string | undefined>>;
  video?: Video;
  category?: Category;
  brand?: Brand;
  format?: Format;
}
