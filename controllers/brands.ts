import { BrandAttributes, BrandCreationAttributes } from '../types';
import { NotFoundError } from '../utils/errors';
import { Brand } from '../db/models';
import { utils, brandMapper } from '../mappers';

export const create = async (payload: unknown): Promise<BrandAttributes> => {
  const data = brandMapper.toBrandCreationAttributes(payload);
  const brand = await Brand.create(data);
  return brand.dataValues;
};

export const update = async (
  idStr: string,
  payload: unknown
): Promise<void> => {
  const id = utils.parseNumber(idStr);
  const data = brandMapper.toBrandCreationAttributes(payload);

  const brand = await Brand.findByPk(id);
  if (!brand) {
    throw new NotFoundError('not found');
  }
  await Brand.update(data, {
    where: { id },
  });
};

export const getById = async (idStr: string): Promise<BrandAttributes> => {
  const id = utils.parseNumber(idStr);
  const brand = await Brand.findByPk(id);
  if (!brand) {
    throw new Error('not found');
  }
  return brand.dataValues;
};

export const deleteById = async (idStr: string): Promise<boolean> => {
  const id = utils.parseNumber(idStr);
  const deletedBrandCount = await Brand.destroy({
    where: { id },
  });
  return !!deletedBrandCount;
};

export const getAll = async (): Promise<BrandAttributes[]> => {
  const response = await Brand.findAll();

  if (!response) throw new Error('');
  return response.map(res => res.dataValues);
};
