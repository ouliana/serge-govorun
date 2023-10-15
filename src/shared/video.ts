import { Entity, IdEntity, Field, Fields } from 'remult';
import { Brand } from './Brand';
import { Format } from './Format';
import { Category } from './Category';
@Entity('videos', {
  allowApiCrud: true,
})
export class Video extends IdEntity {
  @Fields.cuid()
  id = '';

  @Fields.string()
  youtube_video_id = '';

  @Field(() => Format)
  format?: Format;

  @Fields.string()
  title = '';

  @Fields.string()
  description = '';

  @Field(() => Brand)
  brand?: Brand;

  @Field(() => Category)
  category?: Category;

  @Fields.date()
  createdOn = new Date();

  @Fields.boolean()
  featured = false;
}
