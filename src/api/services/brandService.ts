import * as brandDal from '../../db/dal/brand';

// import { GetAllBrandsFilters } from '../../db/dal/types';
import Brand, { BrandInput, BrandOuput } from '../../db/models/Brand';

export const create = (payload: BrandInput): Promise<BrandOuput> => {
  return brandDal.create(payload);
};
export const update = (
  id: number,
  payload: Partial<BrandInput>
): Promise<BrandOuput> => {
  return brandDal.update(id, payload);
};
export const getById = (id: number): Promise<BrandOuput> => {
  return brandDal.getById(id);
};
export const deleteById = (id: number): Promise<boolean> => {
  return brandDal.deleteById(id);
};
export const getAll = (): // filters: GetAllBrandsFilters
Promise<BrandOuput[]> => {
  return brandDal.getAll();
  // return brandDal.getAll(filters);
};
