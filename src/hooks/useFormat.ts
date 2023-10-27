import { remult } from 'remult';
import { useEffect, useState } from 'react';
import { Format } from '../shared/Format';

const useFormat = () => {
  const [formats, setFormats] = useState<Format[]>([]);

  useEffect(() => {
    let result;
    (async () => {
      result = await remult.repo(Format).find();
      setFormats(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { formats, loading: !formats };
};

export default useFormat;
