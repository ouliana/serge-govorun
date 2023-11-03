import ReactPlayer from 'react-player/youtube';
import { isWideScreen, toEmbeddedUrl } from '../../utils/utils';
import { Video } from '../../shared/Video';

interface Props {
  video: Video;
}
const VideoListItem = ({ video }: Props) => {
  return (
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
  );
};

export default VideoListItem;
