import { Optional } from 'sequelize';

export type CreateBrandDTO = {
  id: number;
  brandNameRu: string;
  brandNameEn: string;
};

export type UpdateBrandDTO = Optional<
  CreateBrandDTO,
  'brandNameRu' | 'brandNameEn'
>;

export type FilterBrandsDTO = {
  isDeleted?: boolean;
  includeDeleted?: boolean;
};
