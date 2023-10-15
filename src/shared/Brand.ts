import { Entity, Fields, IdEntity } from 'remult';

@Entity('brands', {
  allowApiCrud: true,
})
export class Brand extends IdEntity {
  @Fields.cuid()
  id = '';

  @Fields.string()
  brand_name = '';
}
