import { Entity, Field, Fields } from 'remult';
import { Brand } from './Brand';
import { Category } from './Category';

@Entity('videos', {
  allowApiCrud: true,
})
export class Video {
  @Fields.cuid()
  id = '';

  @Fields.string()
  url = '';

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

  @Fields.number()
  video_order = 0;
}
