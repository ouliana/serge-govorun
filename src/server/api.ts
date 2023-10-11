import { remultExpress } from 'remult/remult-express';
import { Video } from '../shared/video';
import { Short } from '../shared/short';

export const api = remultExpress({
  entities: [Video, Short],
});
