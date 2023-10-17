import { useState, useEffect } from 'react';
import { remult } from 'remult';
import { AboutParagraph } from '../../shared/AboutParagraph';
import { Container, ProfileImage, ProfileText } from './styles';

const About = () => {
  const [text, setText] = useState<AboutParagraph[]>([]);
  useEffect(() => {
    (async () => {
      const data = await remult.repo(AboutParagraph).find();
      setText(data);
    })();
  }, []);

  return (
    <Container>
      <ProfileImage />
      <h2>Serge Govorun</h2>
      <ProfileText>
        {text.map((row: AboutParagraph) => (
          <p key={row.id}>{row.paragraph}</p>
        ))}
      </ProfileText>
    </Container>
  );
};

export default About;
