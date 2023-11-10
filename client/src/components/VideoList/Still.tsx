import { useContext } from 'react';
import { toStillUrl } from '../../utils/utils';
import { ImageWrapper, StyledPlay } from './styles';
import CurrentContext from '../../contexts/CurrentContext';
import { ActionKind, Video } from '../../types';

interface Props {
  video: Video;
}
const Still = ({ video }: Props) => {
  const { dispatch } = useContext(CurrentContext);

  const handleClick = () => {
    dispatch({
      type: ActionKind.SET,
      payload: video.id,
    });
  };

  return (
    <ImageWrapper
      style={{ backgroundImage: `url(${toStillUrl(video.url)})` }}
      onClick={handleClick}
    >
      <StyledPlay />
    </ImageWrapper>
  );
};

export default Still;
