import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../config';
import { VideoAttributes, VideoCreationAttributes } from '../../types';

const Video: ModelDefined<VideoAttributes, VideoCreationAttributes> =
  sequelize.define(
    'Video',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      titleRu: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      titleEn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      descriptionRu: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      descriptionEn: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdon: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      featured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      videoOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      underscored: true,
      timestamps: false,
      modelName: 'video',
    }
  );

export default Video;
