import { useState, useEffect } from 'react';
import { remult } from 'remult';
import { useTranslation } from 'react-i18next';
import { AboutParagraph } from '../../shared/AboutParagraph';
import { Container, ProfileImage, ProfileText } from './styles';
import { isRussianLanguage } from '../../utils';

const About = () => {
  const { t, i18n } = useTranslation();
  const [text, setText] = useState<string[]>([]);
  const [isRussian, setIsRussian] = useState(isRussianLanguage(i18n.language));

  useEffect(() => {
    (async () => {
      const data = await remult.repo(AboutParagraph).find();
      setText(data.map(p => (isRussian ? p.paragraph_ru : p.paragraph_en)));
    })();
  }, [isRussian]);

  useEffect(() => {
    setIsRussian(isRussianLanguage(i18n.language));
  }, [i18n.language]);

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
