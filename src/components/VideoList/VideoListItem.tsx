import ReactPlayer from 'react-player/youtube';
import { isWideScreen, toEmbeddedUrl } from '../../utils/utils';
import { Video } from '../../shared/Video';
import { Description, VideoWrapper } from './styles';
import useLocaleRu from '../../hooks/useLocaleRu';
import { useEffect, useState } from 'react';

interface Props {
  video: Video;
}
const VideoListItem = ({ video }: Props) => {
  const { t, isRu } = useLocaleRu();
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isRu) {
      setDescription(video.description_ru);
    } else {
      setDescription(video.description_en);
    }
  }, [isRu, t, video]);

  return (
    <VideoWrapper>
      <div
        className={
          isWideScreen(video.url)
            ? 'w-10/12 aspect-video m-auto '
            : 'h-11/12 sm:h-4/5 aspect-[9/16] m-auto '
        }
      >
        <ReactPlayer
          url={toEmbeddedUrl(video.url)}
          width='100%'
          height='100%'
          playing={false}
          loop={isWideScreen(video.url) ? false : true}
          showinfo={false}
          allowFullScreen
          controls
        />
      </div>
      <Description>{description}</Description>
    </VideoWrapper>
  );
};

export default VideoListItem;
