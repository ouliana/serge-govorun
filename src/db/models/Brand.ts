// import { Model, DataTypes, Optional } from 'sequelize';
import { Sequelize, DataTypes, Optional, Model } from 'sequelize';
import sequelize from '../config';
// import sequelizeConnection from '../config';

interface BrandAttributes {
  id: number;
  brandNameRu: string;
  brandNameEn: string;
}

export interface BrandInput extends Optional<BrandAttributes, 'id'> {}
export interface BrandOutput extends Required<BrandAttributes> {}

const Brand = sequelize.define('Brand', {
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
});

// class Brand extends Model {}
// Brand.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     brandNameRu: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     brandNameEn: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     underscored: true,
//     timestamps: false,
//     modelName: 'brand',
//   }
// );

export default Brand;
