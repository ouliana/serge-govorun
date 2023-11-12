import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../config';
import { BlockAttributes, BlockCreationAttributes } from '../../types';

const Block: ModelDefined<BlockAttributes, BlockCreationAttributes> =
  sequelize.define(
    'Block',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      blockName: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      textRu: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      textEn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      underscored: true,
      timestamps: false,
      modelName: 'block',
    }
  );

export default Block;
