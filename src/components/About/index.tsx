import { useState, useEffect } from 'react';
import { remult } from 'remult';
import { AboutParagraph } from '../../shared/AboutParagraph';
import { Container, ProfileImage, ProfileText } from './styles';
import useLocaleRu from '../../hooks/useLocaleRu';

const About = () => {
  const { t, isRu } = useLocaleRu();
  const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const data = await remult.repo(AboutParagraph).find();
      setText(data.map(p => (isRu ? p.paragraph_ru : p.paragraph_en)));
    })();
  }, [isRu]);

  let key = 0;
  return (
    <Container>
      <ProfileImage />
      <h2>{t('serge')}</h2>
      <ProfileText>
        {text.map((p: string) => (
          <p key={key++}>{p}</p>
        ))}
      </ProfileText>
    </Container>
  );
};

export default About;
