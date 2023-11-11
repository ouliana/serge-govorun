import { BrandCreationAttributes } from '../types';
import * as utils from './utils';

export const toBrandCreationAttributes = (
  object: unknown
): BrandCreationAttributes => {
  if (!object || typeof object !== 'object') {
    throw new Error('Invalid data');
  }

  if ('brandNameRu' in object && 'brandNameEN' in object) {
    return {
      brandNameRu: utils.parseString(object.brandNameRu),
      brandNameEn: utils.parseString(object.brandNameRu),
    };
  }

  throw new Error('Missing data');
};
