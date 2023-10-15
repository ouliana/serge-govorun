import { useState, useEffect } from 'react';
import { remult } from 'remult';
import { AboutParagraph } from '../../shared/AboutParagraph';

const About = () => {
  const [text, setText] = useState<AboutParagraph[]>([]);
  useEffect(() => {
    (async () => {
      const data = await remult.repo(AboutParagraph).find();
      console.table(data);
      setText(data);
    })();
  }, []);

  return (
    <>
      <div>
        {text.map((row: AboutParagraph) => (
          <p key={row.id}>{row.paragraph}</p>
        ))}
      </div>
    </>
  );
};

export default About;
