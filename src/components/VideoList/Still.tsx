import { useContext } from 'react';
import { Video } from '../../shared/Video';
import { toStillUrl } from '../../utils/utils';
import { ImageWrapper, StyledPlay } from './styles';
import CurrentContext from '../../contexts/CurrentContext';
import { ActionKind } from '../../types';

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
    <ImageWrapper>
      <img
        src={toStillUrl(video.url)}
        // width='100%'
        // height='100%'
        className='h-full w-full opacity-50 hover:opacity-80 transition ease-in-out duration-300'
        onClick={() => handleClick()}
      />
      <StyledPlay />
    </ImageWrapper>
  );
};

export default Still;
