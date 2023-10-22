import { useEffect, useState } from 'react';
import { useLocation, useLoaderData } from 'react-router-dom';

import VideoListItem from '../VideoListItem';
import { Container } from './styles';
import useVideo from '../../hooks/useVideo';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import ReactPlayer from 'react-player/youtube';
import { Video } from '../../shared/Video';

interface Params {
  category: string;
}

interface RouteParams {
  brand: string;
}

const VideoList = ({ category }: Params) => {
  const params = useLoaderData() as RouteParams;

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const { videos } = useVideo(category);

  const { state } = useLocation();
  const { targetId } = state || {};

  const [videoToPlay, setVideoToPlay] = useState<Video | null>(null);
  const [isVideoFormat, setIsVideoFormat] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'instant' });
      }
    }, 100);
  }, [targetId]);

  const handleClick = (video: Video): void => {
    setVideoToPlay(video);
    if (video.format) {
      setIsVideoFormat(video.format?.format_name === '16:9');
    }
    handleOpen();
  };

  return (
    <>
      {videos && (
        <Container>
          {videos
            .filter(
              v =>
                params.brand === 'All' ||
                v.brand?.brand_name_en === params.brand
            )
            .map((v: Video) => (
              <VideoListItem
                id={v.youtube_video_id}
                key={v.id}
                videoId={v.youtube_video_id}
                handleClick={() => handleClick(v)}
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
            isVideoFormat
              ? 'w-10/12 aspect-video m-auto translate-y-24'
              : 'h-4/5 aspect-[9/16] m-auto translate-y-24'
          }
        >
          <ReactPlayer
            url={`https://www.youtube.com/embed/${videoToPlay?.youtube_video_id}`}
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
