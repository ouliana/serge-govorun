import { BrandAttributes, BrandCreationAttributes } from '../types';
import { NotFoundError } from '../utils/errors';
import { Brand } from '../db/models';
import { utils, brandMapper } from '../mappers';

export const create = async (payload: unknown): Promise<BrandAttributes> => {
  const typedPayload = brandMapper.toBrandCreationAttributes(payload);
  const data = await Brand.create(typedPayload);
  return data.dataValues;
};

export const update = async (
  idValue: string,
  payload: unknown
): Promise<void> => {
  const id = utils.toNumber(idValue);
  const values = brandMapper.toBrandCreationAttributes(payload);

  const data = await Brand.findByPk(id);
  if (!data) {
    throw new NotFoundError('not found');
  }
  await Brand.update(values, {
    where: { id },
  });
};

export const getById = async (idValue: string): Promise<BrandAttributes> => {
  const id = utils.toNumber(idValue);
  const data = await Brand.findByPk(id);
  if (!data) {
    throw new Error('not found');
  }
  return data.dataValues;
};

export const deleteById = async (idValue: string): Promise<boolean> => {
  const id = utils.toNumber(idValue);
  const deletedBrandCount = await Brand.destroy({
    where: { id },
  });
  return !!deletedBrandCount;
};

export const getAll = async (): Promise<BrandAttributes[]> => {
  const data = await Brand.findAll();

  if (!data) throw new Error('');
  return data.map(d => d.dataValues);
};
