import { NotFoundError } from '../utils/errors';
import { utils, blockMapper } from '../mappers';
import { BlockAttributes } from '../types';
import { Block } from '../db/models';

export const create = async (payload: unknown): Promise<BlockAttributes> => {
  const values = blockMapper.toBlockCreationAttributes(payload);
  const data = await Block.create(values);
  return data.dataValues;
};

export const update = async (
  idValue: string,
  payload: unknown
): Promise<void> => {
  const id = utils.parseNumber(idValue);
  const values = blockMapper.toBlockCreationAttributes(payload);

  const data = await Block.findByPk(id);
  if (!data) {
    throw new NotFoundError('not found');
  }
  await Block.update(values, {
    where: { id },
  });
};

export const getById = async (idStr: string): Promise<BlockAttributes> => {
  const id = utils.parseNumber(idStr);
  const data = await Block.findByPk(id);
  if (!data) {
    throw new Error('not found');
  }

  return data.dataValues;
};

export const deleteById = async (idStr: string): Promise<boolean> => {
  const id = utils.parseNumber(idStr);
  const deletedBlocksCount = await Block.destroy({
    where: { id },
  });
  return !!deletedBlocksCount;
};

export const getAll = async (): Promise<BlockAttributes[]> => {
  const data = await Block.findAll();

  if (!data) throw new Error('');
  return data.map(d => d.dataValues);
};
