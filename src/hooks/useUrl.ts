import { useEffect, useState } from 'react';
import { toEmbeddedUrl, toStillUrl } from '../utils/utils';
import { Video } from '../shared/Video';

interface urls {
  embedded: string;
  still: string;
}

const useUrl = (video: Video) => {
  const [videoUrls, setVideoUrls] = useState<urls>({ embedded: '', still: '' });

  useEffect(() => {
    const embedded = toEmbeddedUrl(video.url);
    const still = toStillUrl(video.url);
    setVideoUrls({
      embedded,
      still,
    });
  }, [video.url]);

  return videoUrls;
};

export default useUrl;
