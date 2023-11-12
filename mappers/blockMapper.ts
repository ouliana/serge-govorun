import { BlockCreationAttributes } from '../types';
import * as utils from './utils';

export const toBlockCreationAttributes = (
  object: unknown
): BlockCreationAttributes => {
  if (!object || typeof object !== 'object') {
    throw new Error('Invalid data');
  }

  if ('blockName' in object && 'textRu' in object && 'textEn' in object) {
    return {
      blockName: utils.parseString(object.blockName),
      textRu: utils.parseString(object.textRu),
      textEn: utils.parseString(object.textEn),
    };
  }

  throw new Error('Missing data');
};
