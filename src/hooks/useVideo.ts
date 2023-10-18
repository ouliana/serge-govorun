import { remult } from 'remult';
import { Video } from '../shared/Video';
import { useEffect, useState } from 'react';
import { Category } from '../shared/Category';

const useVideo = (category: string) => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    (async () => {
      const result = await remult.repo(Video).find({
        where: {
          category: await remult.repo(Category).find({
            where: {
              category_name: category,
            },
          }),
        },
      });
      setVideos(result);
    })();
  }, []);

  return { videos, loading: !videos };
};

export default useVideo;