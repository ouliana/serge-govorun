import { useState } from 'react';
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
import AdminVideoEntry from '../AdminVideoEntry';

interface Props {
  video: Video;
}

const AccordionItem = ({ video }: Props) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
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
              onClick={() => {
                console.log('clicked!');
                props.setOpenModal('default');
              }}
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
      <AdminVideoEntry
        openModal={props.openModal}
        setOpenModal={props.setOpenModal}
        headerText={video.title_ru}
      />
    </>
  );
};

export default AccordionItem;
