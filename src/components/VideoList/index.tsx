// import { useLocation, useLoaderData } from 'react-router-dom';

import { Container, Wrapper } from './styles';
import useVideo from '../../hooks/useVideo';

import ReactPlayer from 'react-player/youtube';
import { Video } from '../../shared/Video';
import { isWideScreen, toEmbeddedUrl } from '../../utils';
import { useTranslation } from 'react-i18next';

const VideoList = () => {
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
              <div
                className={
                  isWideScreen(v.url)
                    ? 'w-10/12 aspect-video m-auto '
                    : 'h-11/12 sm:h-4/5 aspect-[9/16] m-auto '
                }
              >
                <ReactPlayer
                  url={toEmbeddedUrl(v.url)}
                  width='100%'
                  height='100%'
                  playing={false}
                  loop={isWideScreen(v.url) ? false : true}
                  showinfo={false}
                  allowFullScreen
                  controls
                />
              </div>
            ))}
          </Container>
        </div>
      )}
    </Wrapper>
  );
};

export default VideoList;
