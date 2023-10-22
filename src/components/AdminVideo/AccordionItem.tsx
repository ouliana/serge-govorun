import { useState } from 'react';
import { Video } from '../../shared/Video';
import VideoDetails from './VideoDetails';
import { stillUrl } from '../../utils';
import VideoTitle from './VideoTitle';
import {
  AccordionItemWrapper,
  ButtonGloup,
  ModalBody,
  StyledContent,
  StyledTitle,
} from './styles';
import IconButton from '../Button';
import { Modal } from 'flowbite-react';
import EditForm from './EditForm';

interface Props {
  video: Video;
}

const AccordionItem = ({ video }: Props) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  // const handleSubmit = async (values: VideoFormValues) => {
  //   console.log(values);
  // };

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
      <Modal
        show={props.openModal === 'default'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <ModalBody>
          <EditForm />
        </ModalBody>
        <Modal.Footer>
          <button onClick={() => props.setOpenModal(undefined)}>
            I accept
          </button>
          <button
            color='gray'
            onClick={() => props.setOpenModal(undefined)}
          >
            Decline
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AccordionItem;
