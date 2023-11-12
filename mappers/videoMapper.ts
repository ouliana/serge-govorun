import { Model } from 'sequelize';
import {
  VideoAttributes,
  VideoCreationAttributes,
  VideoReturned,
} from '../types';
import * as utils from './utils';

export const toVideoCreationAttributes = (
  object: unknown
): VideoCreationAttributes => {
  if (!object || typeof object !== 'object') {
    throw new Error('Invalid data');
  }
  let attr;
  if (
    'url' in object &&
    'titleRu' in object &&
    'titleEn' in object &&
    'featured' in object &&
    'videoOrder' in object
  ) {
    attr = {
      url: utils.parseString(object.url),
      titleRu: utils.parseString(object.titleRu),
      titleEn: utils.parseString(object.titleRu),
      createdon: new Date(),
      featured: utils.parseBoolean(object.featured),
      videoOrder: utils.parseNumber(object.videoOrder),
    };

    if ('descriptionRu' in object) {
      attr = {
        ...attr,
        descriptionRu: utils.parseString(object.descriptionRu),
      };
    }

    if ('descriptionEn' in object) {
      attr = {
        ...attr,
        descriptionEn: utils.parseString(object.descriptionEn),
      };
    }
    return attr;
  }

  throw new Error('Missing data');
};
