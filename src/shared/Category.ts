import { Entity, Fields, IdEntity } from 'remult';

@Entity('categories', {
  allowApiCrud: true,
})
export class Category extends IdEntity {
  @Fields.cuid()
  id = '';

  @Fields.string()
  category_name = '';

  @Fields.string()
  icon = '';
}
