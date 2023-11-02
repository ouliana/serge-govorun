import { useState } from 'react';
// import { useLocation, useLoaderData } from 'react-router-dom';

import VideoListItem from '../VideoListItem';
import { Container } from './styles';
import useVideo from '../../hooks/useVideo';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import ReactPlayer from 'react-player/youtube';
import { Video } from '../../shared/Video';
import { isWideScreen, toEmbeddedUrl } from '../../utils';

const VideoList = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const { videos } = useVideo();

  // const { state } = useLocation();

  const [videoToPlay, setVideoToPlay] = useState<Video | null>(null);
  const [wide, setWide] = useState(true);

  const handleClick = (video: Video): void => {
    setVideoToPlay(video);
    setWide(isWideScreen(video.url));
    handleOpen();
  };

  return (
    <>
      {videos && (
        <Container>
          {videos.map((v: Video) => (
            <VideoListItem
              key={v.id}
              video={v}
              handleClick={handleClick}
            />
          ))}
        </Container>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          className={
            wide
              ? 'w-10/12 aspect-video m-auto '
              : 'h-4/5 aspect-[9/16] m-auto '
          }
        >
          <ReactPlayer
            url={toEmbeddedUrl(videoToPlay?.url)}
            width='100%'
            height='100%'
            playing={true}
            allowFullScreen
            controls
          />
        </Box>
      </Modal>
    </>
  );
};

export default VideoList;
