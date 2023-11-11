import { NotFoundError } from '../utils/errors';
import { utils, aboutParagraphMapper } from '../mappers';
import { AboutParagraphAttributes } from '../types';
import { AboutParagraph } from '../db/models';

export const create = async (
  payload: unknown
): Promise<AboutParagraphAttributes> => {
  const data = aboutParagraphMapper.toAboutParagraphCreationAttributes(payload);
  const paagraphs = await AboutParagraph.create(data);
  return paagraphs.dataValues;
};

export const update = async (
  idStr: string,
  payload: unknown
): Promise<void> => {
  const id = utils.parseNumber(idStr);
  const data = aboutParagraphMapper.toAboutParagraphCreationAttributes(payload);

  const paragraph = await AboutParagraph.findByPk(id);
  if (!paragraph) {
    throw new NotFoundError('not found');
  }
  await AboutParagraph.update(data, {
    where: { id },
  });
};

export const getById = async (
  idStr: string
): Promise<AboutParagraphAttributes> => {
  const id = utils.parseNumber(idStr);
  const paragraph = await AboutParagraph.findByPk(id);
  if (!paragraph) {
    throw new Error('not found');
  }
  return paragraph.dataValues;
};

export const deleteById = async (idStr: string): Promise<boolean> => {
  const id = utils.parseNumber(idStr);
  const deletedAboutParagraphsCount = await AboutParagraph.destroy({
    where: { id },
  });
  return !!deletedAboutParagraphsCount;
};

export const getAll = async (): Promise<AboutParagraphAttributes[]> => {
  const response = await AboutParagraph.findAll();

  if (!response) throw new Error('');
  return response.map(res => res.dataValues);
};
