import { Entity, Fields, IdEntity } from 'remult';

@Entity('formats', {
  allowApiCrud: true,
})
export class Format extends IdEntity {
  @Fields.cuid()
  id = '';

  @Fields.string()
  format_name = '';
}
