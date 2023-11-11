import { Op } from 'sequelize';
import { Brand } from '../models';
import { BrandInput, BrandOutput } from '../models/Brand';
import { NotFoundError } from '../../utils/errors';

export const create = async (payload: BrandInput): Promise<BrandOutput> => {
  const brand = await Brand.create(payload);
  return brand;
};

export const update = async (
  id: number,
  payload: Partial<BrandInput>
): Promise<BrandOutput> => {
  const brand = await Brand.findByPk(id);
  if (!brand) {
    throw new NotFoundError('not found');
  }
  const updatedBrand = await brand.update(payload);
  return updatedBrand;
};

export const getById = async (id: number): Promise<BrandOutput> => {
  const brand = await Brand.findByPk(id);
  if (!brand) {
    throw new Error('not found');
  }
  return brand;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedBrandCount = await Brand.destroy({
    where: { id },
  });
  return !!deletedBrandCount;
};

export const getAll = async (): Promise<BrandOutput[]> => {
  return Brand.findAll();
};
