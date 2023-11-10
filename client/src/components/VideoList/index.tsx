import { ContainerShorts, ContainerWidescreen, Wrapper } from './styles';
import useVideo from '../../hooks/useVideo';
import VideoListItem from './VideoListItem';
import { isWideScreen } from '../../utils/utils';
import { Video } from '../../types';

export const VideoList = () => {
  const { videos } = useVideo();

  return (
    <Wrapper>
      {videos && (
        <ContainerWidescreen>
          {videos
            .filter(v => isWideScreen(v.url))
            .map((v: Video) => (
              <VideoListItem
                key={v.id}
                video={v}
              />
            ))}
        </ContainerWidescreen>
      )}
      {videos && (
        <ContainerShorts>
          {videos
            .filter(v => !isWideScreen(v.url))
            .map((v: Video) => (
              <VideoListItem
                key={v.id}
                video={v}
              />
            ))}
        </ContainerShorts>
      )}
    </Wrapper>
  );
};
