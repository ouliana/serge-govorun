import { remult } from 'remult';
import { Video } from '../shared/Video';
import { useEffect, useState } from 'react';
import { Category } from '../shared/Category';

const useVideo = (categoryName?: string) => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    let result;
    (async () => {
      if (!categoryName) {
        result = await remult.repo(Video).find();
      } else {
        result = await remult.repo(Video).find({
          where: {
            category: await remult.repo(Category).find({
              where: {
                category_name_en: categoryName,
              },
            }),
          },
        });
      }

      setVideos(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { videos, loading: !videos };
};

export default useVideo;
