import { Video } from '../../shared/Video';
import VideoDetails from './VideoDetails';
import { stillUrl } from '../../utils';
import VideoTitle from './VideoTitle';
import {
  AccordionItemWrapper,
  ButtonGloup,
  StyledContent,
  StyledTitle,
} from './styles';
import IconButton from '../Button';

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
        <ButtonGloup>
          <IconButton
            icon='pencil'
            onClick={() => {}}
          />
          <IconButton
            icon='trash'
            onClick={() => {}}
          />
        </ButtonGloup>
        <VideoDetails
          key={video.id}
          video={video}
        />
      </StyledContent>
    </AccordionItemWrapper>
  );
};

export default AccordionItem;
