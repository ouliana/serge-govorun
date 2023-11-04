import { remult } from 'remult';
import { useEffect, useState } from 'react';
import { AboutParagraph } from '../shared/AboutParagraph';

const useAboutParagraphs = () => {
  const [paragraphs, setParagraphs] = useState<AboutParagraph[]>([]);

  useEffect(() => {
    let result;
    (async () => {
      result = await remult.repo(AboutParagraph).find();
      setParagraphs(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { paragraphs };
};

export default useAboutParagraphs;
