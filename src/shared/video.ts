import { Entity, Fields } from 'remult';

@Entity('videos', {
  allowApiCrud: true,
})
export class Video {
  @Fields.autoIncrement()
  id = 0;

  @Fields.string()
  videoId = '';

  @Fields.string()
  title = '';

  @Fields.string()
  description = '';

  @Fields.date()
  createdOn = new Date();

  @Fields.boolean()
  isShort = false;
}
