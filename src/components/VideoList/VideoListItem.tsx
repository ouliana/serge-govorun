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
  const { description_ru, description_en, id, url } = video;

  const { isRu } = useLocaleRu();
  const [description, setDescription] = useState('');
  const {
    state: { current },
  } = useContext(CurrentContext);
  const [selected, setSelected] = useState(false);

  // const handleEnded = () => {
  //   setSelected(false);
  // };

  useEffect(() => {
    if (isRu) {
      setDescription(description_ru);
    } else {
      setDescription(description_en);
    }
  }, [description_en, description_ru, isRu]);

  useEffect(() => {
    if (current === id) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [current, id]);

  if (!urlToVideoId(url)) return null;

  return (
    <VideoWrapper
      className={isWideScreen(url) ? 'px-4 aspect-video' : 'p-4 aspect-[9/16] '}
    >
      {!selected && <Still video={video} />}
      {selected && (
        <ReactPlayer
          url={toEmbeddedUrl(video.url)}
          width='100%'
          height='100%'
          playing={true}
          muted
          // loop={isWideScreen(url) ? false : true}
          allowFullScreen
          controls
          // onEnded={handleEnded}
        />
      )}
      <Description>{description}</Description>
    </VideoWrapper>
  );
};

export default VideoListItem;
