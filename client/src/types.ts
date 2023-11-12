import { Dispatch, SetStateAction } from 'react';

export type Brand = {
  id: number;
  brandNameRu: string;
  brandNameEn: string;
};

export type Category = {
  id: number;
  categoryNameRu: string;
  categoryNameEn: string;
  icon: string;
  route: string;
};

export type VideoClient = {
  id: number;
  url: string;
  titleRu: string;
  titleRn: string;
  descriptionRu: string;
  descriptionRn: string;
  brand: Brand;
  category: Category;
  createdon: Date;
  featured: boolean;
  videoOrder: number;
};

export type VideoRequest = {
  id: number;
  url: string;
  titleRu: string;
  titleRn: string;
  descriptionRu: string;
  descriptionRn: string;
  BrandId: number;
  CategoryId: number;
  createdon: Date;
  featured: boolean;
  videoOrder: number;
};

export type Block = {
  id: number;
  blockName: string;
  textRu: string;
  textEn: string;
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
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  category: string;
  brand: string;
}

export interface CategoryFormValues {
  categoryNameRu: string;
  categoryNameEn: string;
  icon: string;
  route: string;
}

export interface BrandFormValues {
  brandNameRu: string;
  brandNameEn: string;
}

export interface ModalProps {
  openModal: string | undefined;
  setOpenModal: Dispatch<SetStateAction<string | undefined>>;
  video?: VideoClient | null;
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

export type VideoData = Omit<VideoClient, 'id'>;

export interface BlockFormValues {
  textRu: string;
  textEn: string;
}
