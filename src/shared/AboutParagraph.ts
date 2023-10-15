import { Entity, Fields } from 'remult';

@Entity('about_paragraphs', {
  allowApiCrud: true,
})
export class AboutParagraph {
  @Fields.cuid()
  id = '';

  @Fields.number()
  paragraph_position = 1;

  @Fields.string()
  paragraph = '';
}
