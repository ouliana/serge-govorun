import { useState, useEffect } from 'react';
import { Container, ProfileText } from './styles';
import useLocaleRu from '../../hooks/useLocaleRu';
import useAboutParagraphs from '../../hooks/useAboutParagraphs';

const About = () => {
  const { t, isRu } = useLocaleRu();
  const { paragraphs } = useAboutParagraphs();
  const [text, setText] = useState<string>('');
  // const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    if (paragraphs.length) {
      setText(isRu ? paragraphs[1].paragraph_ru : paragraphs[1].paragraph_en);
    }
  }, [paragraphs, isRu]);

  // let key = 0;
  return (
    <Container>
      <h2>{t('about')}</h2>
      <ProfileText data-testid='paragraphs-list'>{text}</ProfileText>
    </Container>
  );
};

export default About;
