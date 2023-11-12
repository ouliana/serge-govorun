import { VideoAttributes, VideoCreationAttributes } from '../types';
import { NotFoundError } from '../utils/errors';
import { Video } from '../db/models';
import { utils, videoMapper } from '../mappers';

export const create = async (payload: unknown): Promise<VideoAttributes> => {
  const values = videoMapper.toVideoCreationAttributes(payload);
  const data = await Video.create(values);
  return data.dataValues;
};

export const update = async (
  idStr: string,
  payload: unknown
): Promise<void> => {
  const id = utils.parseNumber(idStr);
  const values = videoMapper.toVideoCreationAttributes(payload);

  const data = await Video.findByPk(id);
  if (!data) {
    throw new NotFoundError('not found');
  }
  await Video.update(values, {
    where: { id },
  });
};

export const getById = async (idStr: string): Promise<VideoAttributes> => {
  const id = utils.parseNumber(idStr);
  const data = await Video.findByPk(id);
  if (!data) {
    throw new Error('not found');
  }
  return data.dataValues;
};

export const deleteById = async (idStr: string): Promise<boolean> => {
  const id = utils.parseNumber(idStr);
  const deletedVideoCount = await Video.destroy({
    where: { id },
  });
  return !!deletedVideoCount;
};

export const getAll = async (): Promise<VideoAttributes[]> => {
  const data = await Video.findAll();

  if (!data) throw new Error('');
  return data.map(d => d.dataValues);
};
