import { videosService } from '../services';
import { VideoClient } from '../types';
import { useEffect, useState } from 'react';

const useVideo = () => {
  console.log('in use videos');
  const [videos, setVideos] = useState<VideoClient[]>([]);

  useEffect(() => {
    (async () => {
      const data = await videosService.getAll();
      setVideos(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { videos, loading: !videos };
};

export default useVideo;
