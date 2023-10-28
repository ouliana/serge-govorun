import useVideo from '../../hooks/useVideo';
import { Accordion } from 'flowbite-react';
import VideoTitle from './VideoTitle';
import { stillUrl } from '../../utils';
import VideoDetails from './VideoDetails';
import { StyledAccordeonTitle, StyledAccordion } from './styles';

const AdminVideo = () => {
  const { videos } = useVideo();
  return (
    <StyledAccordion collapseAll>
      {videos.map(v => (
        <Accordion.Panel key={v.id}>
          <StyledAccordeonTitle>
            <VideoTitle
              imageSrc={stillUrl(v.youtube_video_id)}
              title={v.title_en}
            />
          </StyledAccordeonTitle>
          <Accordion.Content>
            <VideoDetails video={v} />
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </StyledAccordion>
  );
};

export default AdminVideo;
