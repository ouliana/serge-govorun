import { Video } from '../../shared/Video';
import VideoDetails from '../VideoDetails';
import { stillUrl } from '../../utils';
import VideoTitle from './VideoTitle';
import { AccordionItemWrapper, StyledContent, StyledTitle } from './styles';

interface Props {
  video: Video;
}

const AccordionItem = ({ video }: Props) => {
  return (
    <AccordionItemWrapper>
      <StyledTitle>
        <VideoTitle
          imageSrc={stillUrl(video.youtube_video_id)}
          title={video.title_en}
        />
      </StyledTitle>
      <StyledContent>
        <VideoDetails
          key={video.id}
          video={video}
        />
      </StyledContent>
    </AccordionItemWrapper>
  );
};

export default AccordionItem;
