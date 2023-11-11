import { AboutParagraphCreationAttributes } from '../types';
import * as utils from './utils';

export const toAboutParagraphCreationAttributes = (
  object: unknown
): AboutParagraphCreationAttributes => {
  if (!object || typeof object !== 'object') {
    throw new Error('Invalid data');
  }

  if (
    'paragraphPosition' in object &&
    'paragraphRu' in object &&
    'paragraphEn' in object
  ) {
    return {
      paragraphPosition: utils.parseNumber(object.paragraphPosition),
      paragraphRu: utils.parseString(object.paragraphRu),
      paragraphEn: utils.parseString(object.paragraphEn),
    };
  }

  throw new Error('Missing data');
};
