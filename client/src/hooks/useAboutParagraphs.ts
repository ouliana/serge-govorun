import { useEffect, useState } from 'react';
import { AboutParagraph } from '../types';

const useAboutParagraphs = () => {
  const [paragraphs, setParagraphs] = useState<AboutParagraph[]>([]);

  useEffect(() => {
    const result = [] as AboutParagraph[];
    (async () => {
      // result = await remult.repo(AboutParagraph).find();
      setParagraphs(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { paragraphs };
};

export default useAboutParagraphs;
