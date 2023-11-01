import { Entity, Fields, IdEntity } from 'remult';

@Entity('categories', {
  allowApiCrud: true,
})
export class Category extends IdEntity {
  @Fields.cuid()
  id = '';

  @Fields.string()
  category_name_ru = '';

  @Fields.string()
  category_name_en = '';

  @Fields.string()
  icon = '';

  @Fields.string()
  route = '';
}
