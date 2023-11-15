import { UserCreationAttributes } from '../types';
import * as utils from './utils';

export const toUserCreationAttributes = (
  object: unknown
): UserCreationAttributes => {
  if (!object || typeof object !== 'object') {
    throw new Error('Invalid data');
  }

  if (
    'fullName' in object &&
    'username' in object &&
    'passwordHash' in object
  ) {
    return {
      fullName: utils.parseString(object.fullName),
      username: utils.parseString(object.username),
      passwordHash: utils.parseString(object.passwordHash),
    };
  }

  throw new Error('Missing data');
};
