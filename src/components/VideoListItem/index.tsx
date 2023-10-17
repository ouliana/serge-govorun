import { stillUrl } from '../../utils';
import { Thumb } from './styles';

interface Props {
  id: string;
  videoId: string;
  handleClick: (id: string) => void;
}

const VideoListItem = ({ id, videoId, handleClick }: Props) => {
  // const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <Thumb
        id={id}
        src={stillUrl(videoId)}
        onClick={() => handleClick(videoId)}
      />
    </>
  );
};

export default VideoListItem;
