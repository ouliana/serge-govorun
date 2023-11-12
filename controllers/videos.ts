import {
  VideoAttributes,
  VideoCreationAttributes,
  VideoReturned,
} from '../types';
import { NotFoundError } from '../utils/errors';
import { Brand, Category, Video } from '../db/models';
import { utils, videoMapper } from '../mappers';

export const create = async (payload: unknown): Promise<VideoAttributes> => {
  const values = videoMapper.toVideoCreationAttributes(payload);
  const data = await Video.create(values);
  return data.dataValues;
};

export const update = async (
  idValue: string,
  payload: unknown
): Promise<void> => {
  const id = utils.toNumber(idValue);
  const values = videoMapper.toVideoCreationAttributes(payload);

  const data = await Video.findByPk(id);
  if (!data) {
    throw new NotFoundError('not found');
  }
  await Video.update(values, {
    where: { id },
  });
};

export const getById = async (idValue: string): Promise<VideoAttributes> => {
  const id = utils.toNumber(idValue);
  const video = await Video.findOne({
    where: {
      id,
    },
    include: [Brand, Category],
  });
  if (!video) {
    throw new Error('not found');
  }

  return video.dataValues;
};

export const deleteById = async (idValue: string): Promise<boolean> => {
  const id = utils.toNumber(idValue);
  const deletedVideoCount = await Video.destroy({
    where: { id },
  });
  return !!deletedVideoCount;
};

export const getAll = async (): Promise<VideoAttributes[]> => {
  const data = await Video.findAll({
    include: [Brand, Category],
  });

  if (!data) throw new Error('');
  return data.map(d => d.dataValues);
};
