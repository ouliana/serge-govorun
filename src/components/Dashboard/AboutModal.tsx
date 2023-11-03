import * as Yup from 'yup';

import {
  ActionKind,
  MessageKind,
  ModalProps,
  ParagraphFormValues,
} from '../../types';
import { withFormik } from 'formik';
import AboutForm from './AboutForm';
import {
  Button,
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledModal,
} from '../adminStyles';
import useAboutParagraph from '../../hooks/useAboutParagraphs';
import { useContext } from 'react';
import ToastMessageContext from '../../contexts/ToastMessageContext';
import { AboutParagraph } from '../../shared/AboutParagraph';
import { remult } from 'remult';

interface FormProps {
  initialP1ru: string;
  initialP1en: string;
  initialP2ru: string;
  initialP2en: string;
  initialP3ru: string;
  initialP3en: string;
}

const AboutModal = ({ openModal, setOpenModal }: ModalProps) => {
  const { paragraphs } = useAboutParagraph();

  const { messageDispatch } = useContext(ToastMessageContext);

  // CRUD operations
  const saveParagraphs = async (values: ParagraphFormValues) => {
    try {
      const paragraph1 = {
        id: paragraphs[0].id,
        paragraph_position: 1,
        paragraph_ru: values.paragraph_1_ru,
        paragraph_en: values.paragraph_1_en,
      };
      const paragraph2 = {
        id: paragraphs[1].id,
        paragraph_position: 2,
        paragraph_ru: values.paragraph_2_ru,
        paragraph_en: values.paragraph_2_en,
      };
      const paragraph3 = {
        id: paragraphs[2].id,
        paragraph_position: 3,
        paragraph_ru: values.paragraph_3_ru,
        paragraph_en: values.paragraph_3_en,
      };
      await remult.repo(AboutParagraph).save({ ...paragraph1 });
      await remult.repo(AboutParagraph).save({ ...paragraph2 });
      await remult.repo(AboutParagraph).save({ ...paragraph3 });

      setOpenModal(undefined);
    } catch (e) {
      let message = 'Something worng';
      if (e instanceof Error) {
        message += ' ' + e.message;
      }
      throw new Error(message);
    }
  };

  const InnerForm = withFormik<FormProps, ParagraphFormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
      return {
        paragraph_1_ru: props.initialP1ru || '',
        paragraph_1_en: props.initialP1en || '',
        paragraph_2_ru: props.initialP2ru || '',
        paragraph_2_en: props.initialP2en || '',
        paragraph_3_ru: props.initialP3ru || '',
        paragraph_3_en: props.initialP3en || '',
      };
    },
    validationSchema: Yup.object({
      paragraph_1_ru: Yup.string(),
      paragraph_1_en: Yup.string(),
      paragraph_2_ru: Yup.string(),
      paragraph_2_en: Yup.string(),
      paragraph_3_ru: Yup.string(),
      paragraph_3_en: Yup.string(),
    }),
    handleSubmit: async values => {
      saveParagraphs(values);
      messageDispatch({
        type: ActionKind.SET,
        payload: {
          content: `Текст успешно сохранён.`,
          kind: MessageKind.SUCCESS,
        },
      });
      console.log(values);
    },
  })(AboutForm);

  return (
    <StyledModal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <StyledHeader>{'Редактирование'}</StyledHeader>
      <StyledBody>
        <InnerForm
          initialP1ru={
            paragraphs && paragraphs.length ? paragraphs[0].paragraph_ru : ''
          }
          initialP1en={
            paragraphs && paragraphs.length ? paragraphs[0].paragraph_en : ''
          }
          initialP2ru={
            paragraphs && paragraphs.length > 1
              ? paragraphs[1].paragraph_ru
              : ''
          }
          initialP2en={
            paragraphs && paragraphs.length > 1
              ? paragraphs[1].paragraph_en
              : ''
          }
          initialP3ru={
            paragraphs && paragraphs.length > 2
              ? paragraphs[2].paragraph_ru
              : ''
          }
          initialP3en={
            paragraphs && paragraphs.length > 2
              ? paragraphs[2].paragraph_en
              : ''
          }
        />
      </StyledBody>
      <StyledFooter>
        <Button onClick={() => setOpenModal(undefined)}>Отмена</Button>
        <Button
          type='submit'
          form='AboutForm'
        >
          Сохранить
        </Button>
      </StyledFooter>
    </StyledModal>
  );
};

export default AboutModal;
