import useVideo from '../../hooks/useVideo';
import { Accordion } from 'flowbite-react';
import VideoTitle from './VideoTitle';
import { stillUrl } from '../../utils';
import VideoDetails from './VideoDetails';

const AdminVideo = () => {
  const { videos } = useVideo();
  return (
    <Accordion
      flush
      collapseAll
      className='w-screen px-4 md:w-4/5 lg:w-3/5'
    >
      {videos.map(v => (
        <Accordion.Panel key={v.id}>
          <Accordion.Title>
            <VideoTitle
              imageSrc={stillUrl(v.youtube_video_id)}
              title={v.title_en}
            />
          </Accordion.Title>
          <Accordion.Content>
            <VideoDetails video={v} />
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default AdminVideo;
