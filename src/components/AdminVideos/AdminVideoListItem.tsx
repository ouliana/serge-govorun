import { useState } from 'react';
import { Video } from '../../shared/Video';
import { toStillUrl } from '../../utils/utils';
import VideoTitle from './VideoTitle';
import { ListItemWrapper } from './styles';
import VideoDetails from './VideoDetails';
import { ButtonGroup } from '../adminStyles';
import IconButton from '../Button';
import { IoChevronDown } from 'react-icons/io5';
import tw from 'tailwind-styled-components';

interface Props {
  video: Video;
  handleDrag: (event: React.DragEvent<HTMLElement>) => void;
  handleDrop: (event: React.DragEvent<HTMLElement>) => void;
  setOpenEditModal: (openEditModal: string) => void;
  setOpenDeleteModal: (openDeleteModal: string) => void;
  setCurrent: (curent: Video) => void;
}
const AdminVideoListItem = ({
  video,
  handleDrag,
  handleDrop,
  setOpenEditModal,
  setOpenDeleteModal,
}: // setCurrent,
Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [rotate, setRotate] = useState<boolean | undefined>();

  // const handleClick = () => {
  //   setCurrent(video);
  // };

  const handleChevronCkick = () => {
    // undefined is needed to exclude animation at first render
    setRotate(rotate === undefined ? true : !rotate);
    setIsOpen(!isOpen);
    if (showDetails) {
      setTimeout(() => setShowDetails(!showDetails), 400);
    } else {
      setShowDetails(!showDetails);
    }
  };

  return (
    <div
      draggable={true}
      id={video.video_order.toString()}
      onDragOver={ev => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      // onClick={handleClick}
    >
      <ListItemWrapper>
        <VideoTitle
          imageSrc={toStillUrl(video.url)}
          title={video.title_ru}
        />
        <ButtonGroup>
          <IconButton
            icon='pencil'
            onClick={() => {
              setOpenEditModal('default');
            }}
          />
          <IconButton
            icon='trash'
            onClick={() => {
              setOpenDeleteModal('default');
            }}
          />
          <StyledChevron
            onClick={handleChevronCkick}
            $rotate={rotate}
          />
        </ButtonGroup>
      </ListItemWrapper>
      {showDetails && (
        <VideoDetails
          video={video}
          isOpen={isOpen}
        />
      )}
    </div>
  );
};

interface ButtonProps {
  onClick: () => void;
  $rotate: boolean | undefined;
}

const StyledChevron = tw(IoChevronDown)<ButtonProps>`
  text-zinc-600
  dark:text-zinc-50
  w-10
  h-10
  p-2
  transition-all
  transform
  ${p => {
    if (typeof p.$rotate === 'boolean') {
      return p.$rotate
        ? 'animate-rotateDown rotate-180'
        : 'animate-rotateUp rotate-0';
    } else return '';
  }}
`;

export default AdminVideoListItem;
