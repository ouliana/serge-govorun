import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../config';
import {
  AboutParagraphAttributes,
  AboutParagraphCreationAttributes,
} from '../../types';

const AboutParagraph: ModelDefined<
  AboutParagraphAttributes,
  AboutParagraphCreationAttributes
> = sequelize.define(
  'AboutParagraph',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paragraphPosition: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paragraphRu: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    paragraphEn: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
    modelName: 'aboutParagraph',
  }
);

export default AboutParagraph;
