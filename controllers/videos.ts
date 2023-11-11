import { VideoAttributes, VideoCreationAttributes } from '../types';
import { NotFoundError } from '../utils/errors';
import { Video } from '../db/models';
import { utils, videoMapper } from '../mappers';

export const create = async (payload: unknown): Promise<VideoAttributes> => {
  const data = videoMapper.toVideoCreationAttributes(payload);
  const video = await Video.create(data);
  return video.dataValues;
};

export const update = async (
  idStr: string,
  payload: unknown
): Promise<void> => {
  const id = utils.parseNumber(idStr);
  const data = videoMapper.toVideoCreationAttributes(payload);

  const video = await Video.findByPk(id);
  if (!video) {
    throw new NotFoundError('not found');
  }
  await Video.update(data, {
    where: { id },
  });
};

export const getById = async (idStr: string): Promise<VideoAttributes> => {
  const id = utils.parseNumber(idStr);
  const video = await Video.findByPk(id);
  if (!video) {
    throw new Error('not found');
  }
  return video.dataValues;
};

export const deleteById = async (idStr: string): Promise<boolean> => {
  const id = utils.parseNumber(idStr);
  const deletedBrandCount = await Video.destroy({
    where: { id },
  });
  return !!deletedBrandCount;
};

export const getAll = async (): Promise<VideoAttributes[]> => {
  const response = await Video.findAll();

  if (!response) throw new Error('');
  return response.map(res => res.dataValues);
};
