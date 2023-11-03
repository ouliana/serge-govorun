import { useState, useEffect } from 'react';
import { Container, ProfileImage, ProfileText } from './styles';
import useLocaleRu from '../../hooks/useLocaleRu';
import useAboutParagraphs from '../../hooks/useAboutParagraphs';

const About = () => {
  const { t, isRu } = useLocaleRu();
  const { paragraphs } = useAboutParagraphs();
  const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    if (paragraphs) {
      setText(paragraphs.map(p => (isRu ? p.paragraph_ru : p.paragraph_en)));
    }
  }, [paragraphs, isRu]);

  let key = 0;
  return (
    <Container>
      <ProfileImage />
      <h1>{t('serge')}</h1>
      <ProfileText data-testid='paragraphs-list'>
        {text.map((p: string) => {
          if (p !== '') return <p key={key++}>{p}</p>;
        })}
      </ProfileText>
    </Container>
  );
};

export default About;
