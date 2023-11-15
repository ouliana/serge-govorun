import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../config';
import { UserAttributes, UserCreationAttributes } from '../../types';

const User: ModelDefined<UserAttributes, UserCreationAttributes> =
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      passwordHash: {
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

export default User;
