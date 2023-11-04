import { Container, Wrapper } from './styles';
import useVideo from '../../hooks/useVideo';
import { Video } from '../../shared/Video';
import VideoListItem from './VideoListItem';

export const VideoList = () => {
  const { videos } = useVideo();

  return (
    <Wrapper>
      <div className='sm:col-span-2 md:col-span-3 lg:col-span-4 text-center'></div>
      {videos && (
        <div className='w-full p-4'>
          <Container>
            {videos.map((v: Video) => (
              <VideoListItem
                key={v.id}
                video={v}
              />
            ))}
          </Container>
        </div>
      )}
    </Wrapper>
  );
};
