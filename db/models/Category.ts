import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../config';
import { CategoryAttributes, CategoryCreationAttributes } from '../../types';

const Category: ModelDefined<CategoryAttributes, CategoryCreationAttributes> =
  sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryNameRu: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      categoryNameEn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      icon: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      route: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      underscored: true,
      timestamps: false,
      modelName: 'category',
    }
  );

export default Category;
