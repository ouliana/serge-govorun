import { CategoryCreationAttributes } from '../types';
import * as utils from './utils';

export const toCategoryCreationAttributes = (
  object: unknown
): CategoryCreationAttributes => {
  if (!object || typeof object !== 'object') {
    throw new Error('Invalid data');
  }

  if (
    'categoryNameRu' in object &&
    'categoryNameEn' in object &&
    'icon' in object &&
    'route' in object
  ) {
    return {
      categoryNameRu: utils.parseString(object.categoryNameRu),
      categoryNameEn: utils.parseString(object.categoryNameEn),
      icon: utils.parseString(object.icon),
      route: utils.parseString(object.route),
    };
  }

  throw new Error('Missing data');
};
