import { useState, useEffect } from 'react';
import { remult } from 'remult';
import { AboutParagraph } from '../../shared/AboutParagraph';
import ProfileImage from './ProfileImage';

const About = () => {
  const [text, setText] = useState<AboutParagraph[]>([]);
  useEffect(() => {
    (async () => {
      const data = await remult.repo(AboutParagraph).find();
      setText(data);
    })();
  }, []);

  return (
    <>
      <ProfileImage />
      <div>
        {text.map((row: AboutParagraph) => (
          <p key={row.id}>{row.paragraph}</p>
        ))}
      </div>
    </>
  );
};

export default About;
