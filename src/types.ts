import { Dispatch, SetStateAction } from 'react';
import { Video } from './shared/Video';

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

export interface ModalProps {
  openModal: string | undefined;
  setOpenModal: Dispatch<SetStateAction<string | undefined>>;
  video?: Video;
}
