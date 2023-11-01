import useUrl from '../../hooks/useUrl';
import { Video } from '../../shared/Video';
import { Thumb } from './styles';

interface Props {
  video: Video;
  handleClick: (video: Video) => void;
}

const VideoListItem = ({ video, handleClick }: Props) => {
  const { still } = useUrl(video);

  return (
    <>
      <Thumb
        src={still}
        onClick={() => handleClick(video)}
      />
    </>
  );
};

export default VideoListItem;
