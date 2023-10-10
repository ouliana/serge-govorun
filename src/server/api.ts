import { remultExpress } from 'remult/remult-express';
import { Video } from '../shared/video';

export const api = remultExpress({
  entities: [Video],
});
