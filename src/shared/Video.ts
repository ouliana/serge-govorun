import { Entity, Field, Fields } from 'remult';
import { Brand } from './Brand';
import { Format } from './Format';
import { Category } from './Category';

@Entity('videos', {
  allowApiCrud: true,
})
export class Video {
  @Fields.cuid()
  id = '';

  @Fields.string()
  youtube_video_id = '';

  @Field(() => Format)
  format!: Format;

  @Fields.string()
  title_ru = '';

  @Fields.string()
  title_en = '';

  @Fields.string()
  description_ru = '';

  @Fields.string()
  description_en = '';

  @Field(() => Brand)
  brand!: Brand;

  @Field(() => Category)
  category!: Category;

  @Fields.date()
  createdOn = new Date();

  @Fields.boolean()
  featured = false;
}
