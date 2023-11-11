import { Brand } from '../../interfaces';
import { BrandOutput } from '../../../db/models/Brand';

export const toBrand = (brand: BrandOutput): Brand => {
  return {
    id: brand.id,
    brandNameRu: brand.brandNameRu,
    brandNameEn: brand.brandNameEn,
  };
};
