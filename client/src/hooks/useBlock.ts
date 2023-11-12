import { useEffect, useState } from 'react';
import { blocksService } from '../services';
import { Block } from '../types';

const useBlock = (name: string) => {
  const [block, setBlock] = useState<Block | null>(null);

  useEffect(() => {
    (async () => {
      const data = await blocksService.getByName(name);
      setBlock(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { block };
};

export default useBlock;
