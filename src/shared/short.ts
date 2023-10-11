import { Entity, Fields } from 'remult';

@Entity('short', {
  allowApiCrud: true,
})
export class Short {
  @Fields.autoIncrement()
  id = 0;

  @Fields.string()
  videoId = '';

  @Fields.string()
  title = '';

  @Fields.string()
  description = '';

  @Fields.date()
  created = new Date();
}
