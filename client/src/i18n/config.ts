/* eslint-disable @typescript-eslint/no-floating-promises */
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './ru.json';
import en from './en.json';

const DETECTION_OPTIONS = {
  order: ['navigator'],
};
(async () => {
  try {
    await i18next
      .use(initReactI18next)
      .use(LanguageDetector)
      .init({
        detection: DETECTION_OPTIONS,
        debug: false,
        resources: {
          en: {
            translation: en,
          },
          ru: {
            translation: ru,
          },
        },
        fallbackLng: 'en',
      });
  } catch (e) {
    throw new Error();
  }
})();
