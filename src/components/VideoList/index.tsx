import { Container, Wrapper } from './styles';
import useVideo from '../../hooks/useVideo';
import { Video } from '../../shared/Video';
import { useTranslation } from 'react-i18next';
import VideoListItem from './VideoListItem';

export const VideoList = () => {
  const { t } = useTranslation();

  const { videos } = useVideo();

  return (
    <Wrapper>
      <div className='sm:col-span-2 md:col-span-3 lg:col-span-4 text-center'>
        <h2>{t('myWork')}</h2>
      </div>
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
