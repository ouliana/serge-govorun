import { CategoryAttributes, CategoryCreationAttributes } from '../types';
import { NotFoundError } from '../utils/errors';
import { Category } from '../db/models';
import { utils, categoryMapper } from '../mappers';

export const create = async (payload: unknown): Promise<CategoryAttributes> => {
  const values = categoryMapper.toCategoryCreationAttributes(payload);
  const data = await Category.create(values);
  return data.dataValues;
};

export const update = async (
  idValue: string,
  payload: unknown
): Promise<void> => {
  const id = utils.toNumber(idValue);
  const typedPayload = categoryMapper.toCategoryCreationAttributes(payload);

  const data = await Category.findByPk(id);
  if (!data) {
    throw new NotFoundError('not found');
  }
  await Category.update(typedPayload, {
    where: { id },
  });
};

export const getById = async (idValue: string): Promise<CategoryAttributes> => {
  const id = utils.toNumber(idValue);
  const data = await Category.findByPk(id);
  if (!data) {
    throw new Error('not found');
  }
  return data.dataValues;
};

export const deleteById = async (idValue: string): Promise<boolean> => {
  const id = utils.toNumber(idValue);
  const deletedCategoryCount = await Category.destroy({
    where: { id },
  });
  return !!deletedCategoryCount;
};

export const getAll = async (): Promise<CategoryAttributes[]> => {
  const data = await Category.findAll();

  if (!data) throw new Error('');
  return data.map(d => d.dataValues);
};
