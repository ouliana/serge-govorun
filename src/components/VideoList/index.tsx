import { ContainerWidescreen, Wrapper } from './styles';
import useVideo from '../../hooks/useVideo';
import { Video } from '../../shared/Video';
import VideoListItem from './VideoListItem';

export const VideoList = () => {
  const { videos } = useVideo();

  return (
    <Wrapper>
      {videos && (
        <ContainerWidescreen>
          {videos
            // .filter(v => isWideScreen(v.url))
            .map((v: Video) => (
              <VideoListItem
                key={v.id}
                video={v}
              />
            ))}
        </ContainerWidescreen>
      )}
      {/* {videos && (
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
      )} */}
    </Wrapper>
  );
};
