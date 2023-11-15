import User from '../db/models/User';
import { userMapper, utils } from '../mappers';
import { UserAttributes } from '../types';
import { NotFoundError } from '../utils/errors';

export const getByUsername = async (
  username: string
): Promise<UserAttributes> => {
  const data = await User.findOne({
    where: {
      username,
    },
  });
  if (!data) {
    throw new Error('user not found');
  }

  return data.dataValues;
};

export const create = async (payload: unknown): Promise<UserAttributes> => {
  const values = userMapper.toUserCreationAttributes(payload);
  const data = await User.create(values);
  return data.dataValues;
};

export const update = async (
  idValue: string,
  payload: unknown
): Promise<void> => {
  const id = utils.toNumber(idValue);
  const values = userMapper.toUserCreationAttributes(payload);

  const data = await User.findByPk(id);
  if (!data) {
    throw new NotFoundError('not found');
  }
  await User.update(values, {
    where: { id },
  });
};
