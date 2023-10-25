import { Dispatch, SetStateAction } from 'react';

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
  // category: string;
  // brand: string;
  // createdOn: Date;
  // featured: false;
}

export interface ModalProps {
  openModal: string | undefined;
  setOpenModal: Dispatch<SetStateAction<string | undefined>>;
  headerText?: string;
}
