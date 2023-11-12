import { Dispatch, SetStateAction } from 'react';

export type Brand = {
  id: string;
  brand_name_ru: string;
  brand_name_en: string;
};

export type Category = {
  id: string;
  category_name_ru: string;
  category_name_en: string;
  icon: string;
  route: string;
};

export type Video = {
  id: string;
  url: string;
  titleRu: string;
  titleRn: string;
  descriptionRu: string;
  descriptionRn: string;
  brand: Brand;
  category: Category;
  createdOn: Date;
  featured: boolean;
  videoOrder: number;
};

export type AboutParagraph = {
  id: string;
  paragraph_position: number;
  paragraph_ru: string;
  paragraph_en: string;
};

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
  url: string;
  title_ru: string;
  title_en: string;
  description_ru: string;
  description_en: string;
  category: string;
  brand: string;
}

export interface CategoryFormValues {
  category_name_ru: string;
  category_name_en: string;
  icon: string;
  route: string;
}

export interface BrandFormValues {
  brand_name_ru: string;
  brand_name_en: string;
}

export interface ModalProps {
  openModal: string | undefined;
  setOpenModal: Dispatch<SetStateAction<string | undefined>>;
  video?: Video | null;
  category?: Category;
  brand?: Brand;
  newText?: boolean;
}

export enum ActionKind {
  SET = 'SET',
  CLEAR = 'CLEAR',
}

export enum MessageKind {
  SUCCESS = 'SUCCESS',
  DELETE = 'DELETE',
  ERROR = 'ERROR',
  NONE = 'NONE',
}

export interface Message {
  content: string;
  kind: MessageKind;
}

export type VideoData = Omit<Video, 'id'>;

export interface ParagraphFormValues {
  paragraph_1_ru: string;
  paragraph_1_en: string;
  paragraph_2_ru: string;
  paragraph_2_en: string;
  paragraph_3_ru: string;
  paragraph_3_en: string;
}
