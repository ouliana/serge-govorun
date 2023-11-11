import { CategoryAttributes, CategoryCreationAttributes } from '../types';
import { NotFoundError } from '../utils/errors';
import { Category } from '../db/models';
import { utils, categoryMapper } from '../mappers';

export const create = async (payload: unknown): Promise<CategoryAttributes> => {
  const data = categoryMapper.toCategoryCreationAttributes(payload);
  const brand = await Category.create(data);
  return brand.dataValues;
};

export const update = async (
  idStr: string,
  payload: unknown
): Promise<void> => {
  const id = utils.parseNumber(idStr);
  const data = categoryMapper.toCategoryCreationAttributes(payload);

  const category = await Category.findByPk(id);
  if (!category) {
    throw new NotFoundError('not found');
  }
  await Category.update(data, {
    where: { id },
  });
};

export const getById = async (idStr: string): Promise<CategoryAttributes> => {
  const id = utils.parseNumber(idStr);
  const category = await Category.findByPk(id);
  if (!category) {
    throw new Error('not found');
  }
  return category.dataValues;
};

export const deleteById = async (idStr: string): Promise<boolean> => {
  const id = utils.parseNumber(idStr);
  const deletedCategoryCount = await Category.destroy({
    where: { id },
  });
  return !!deletedCategoryCount;
};

export const getAll = async (): Promise<CategoryAttributes[]> => {
  const response = await Category.findAll();

  if (!response) throw new Error('');
  return response.map(res => res.dataValues);
};
