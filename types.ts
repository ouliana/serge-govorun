import { Optional } from 'sequelize';

export interface BlockAttributes {
  id: number;
  blockName: number;
  textRu: string;
  textEn: string;
}

export type BlockCreationAttributes = Optional<BlockAttributes, 'id'>;

export interface BrandAttributes {
  id: number;
  brandNameRu: string;
  brandNameEn: string;
}

export type BrandCreationAttributes = Optional<BrandAttributes, 'id'>;

export interface CategoryAttributes {
  id: number;
  categoryNameRu: string;
  categoryNameEn: string;
  icon: string;
  route: string;
}

export type CategoryCreationAttributes = Optional<CategoryAttributes, 'id'>;

export interface VideoAttributes {
  id: number;
  url: string;
  titleRu: string;
  titleEn: string;
  descriptionRu?: string;
  descriptionEn?: string;
  createdon: Date;
  featured: boolean;
  videoOrder: number;
}

export type VideoCreationAttributes = Optional<VideoAttributes, 'id'>;
