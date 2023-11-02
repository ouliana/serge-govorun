import { remult } from 'remult';
import { Video } from '../shared/Video';
import { useEffect, useState } from 'react';

const useVideo = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    let result;
    (async () => {
      result = await remult.repo(Video).find();
      setVideos(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { videos, loading: !videos };
};

export default useVideo;
