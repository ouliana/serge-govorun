import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../config';
import { BrandAttributes, BrandCreationAttributes } from '../../types';

const Brand: ModelDefined<BrandAttributes, BrandCreationAttributes> =
  sequelize.define(
    'Brand',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      brandNameRu: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      brandNameEn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      underscored: true,
      timestamps: false,
      modelName: 'brand',
    }
  );

export default Brand;
