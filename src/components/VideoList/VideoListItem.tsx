import ReactPlayer from 'react-player/youtube';
import { isWideScreen, toEmbeddedUrl } from '../../utils/utils';
import { Video } from '../../shared/Video';
import { Description, VideoWrapper } from './styles';
import useLocaleRu from '../../hooks/useLocaleRu';
import { useContext, useEffect, useState } from 'react';
import { urlToVideoId } from '../../utils/urlToVideoId';
import CurrentContext from '../../contexts/CurrentContext';
import Still from './Still';

interface Props {
  video: Video;
}
const VideoListItem = ({ video }: Props) => {
  const { t, isRu } = useLocaleRu();
  const [description, setDescription] = useState('');
  const {
    state: { current },
  } = useContext(CurrentContext);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (isRu) {
      setDescription(video.description_ru);
    } else {
      setDescription(video.description_en);
    }
  }, [isRu, t, video]);

  useEffect(() => {
    if (current === video.id) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selected, current, video.id]);

  if (!urlToVideoId(video.url)) return null;

  return (
    <VideoWrapper
    // className={
    //   isWideScreen(video.url) ? 'px-4 aspect-video' : 'p-4 aspect-[9/16] '
    // }
    >
      {!selected && <Still video={video} />}
      {selected && (
        <ReactPlayer
          url={toEmbeddedUrl(video.url)}
          width='100%'
          height='100%'
          playing={true}
          loop={isWideScreen(video.url) ? false : true}
          showinfo={false}
          allowFullScreen
          controls
        />
      )}
      <Description>{description}</Description>
    </VideoWrapper>
  );
};

export default VideoListItem;
