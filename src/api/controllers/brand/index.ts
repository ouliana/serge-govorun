import * as service from '../../services/brandService';
import {
  CreateBrandDTO,
  UpdateBrandDTO,
  FilterBrandsDTO,
} from '../../../db/dto/brand.dto';
import { Brand } from '../../interfaces';
import * as mapper from './mapper';

export const create = async (payload: CreateBrandDTO): Promise<Brand> => {
  return mapper.toBrand(await service.create(payload));
};

export const update = async (
  id: number,
  payload: UpdateBrandDTO
): Promise<Brand> => {
  return mapper.toBrand(await service.update(id, payload));
};
export const getById = async (id: number): Promise<Brand> => {
  return mapper.toBrand(await service.getById(id));
};
export const deleteById = async (id: number): Promise<Boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};
export const getAll = async (): // filters: FilterBrandsDTO
Promise<Brand[]> => {
  return (await service.getAll()).map(mapper.toBrand);
};
