import { useEffect, useState } from 'react';
import { useLocation, useLoaderData } from 'react-router-dom';

import { Video } from '../../shared/Video';
import VideoListItem from '../VideoListItem';
import {
  Container,
  Player,
  VideoModal,
  VideoModalBody,
  VideoModalHeader,
} from './styles';
import useVideo from '../../hooks/useVideo';

interface Params {
  category: string;
}

interface RouteParams {
  brand: string;
}

const VideoList = ({ category }: Params) => {
  const params = useLoaderData() as RouteParams;

  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  const { videos } = useVideo(category);

  // const navigate = useNavigate();
  const { state } = useLocation();
  const { targetId } = state || {};

  const [videoToPlay, setVideoToPlay] = useState<Video | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById(targetId);
      console.log(el);
      if (el) {
        el.scrollIntoView({ behavior: 'instant' });
      }
    }, 100);
  }, [targetId]);

  const handleClick = (video: Video): void => {
    setVideoToPlay(video);
    props.setOpenModal('dismissible');
  };
  // const handleClick = (id: string): void => navigate(`/${id}`);

  return (
    <>
      {videos && (
        <Container>
          {videos
            .filter(
              v =>
                params.brand === 'All' || v.brand?.brand_name === params.brand
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
      <VideoModal
        dismissible
        show={props.openModal === 'dismissible'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <VideoModalHeader>{videoToPlay?.title}</VideoModalHeader>
        <VideoModalBody>
          <Player
            allowFullScreen={true}
            src={`https://www.youtube.com/embed/${videoToPlay?.youtube_video_id}`}
          />
        </VideoModalBody>
      </VideoModal>
    </>
  );
};

export default VideoList;
