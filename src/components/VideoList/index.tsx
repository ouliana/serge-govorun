import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';

import { Video } from '../../shared/Video';
import VideoListItem from '../VideoListItem';
import { Container } from './styled';
// import { BrandActionKind, useBrandDispatch } from '../../context/helpers';
import useVideo from '../../hooks/useVideo';

interface Params {
  category: string;
}

interface RouteParams {
  brand: string;
}

const VideoList = ({ category }: Params) => {
  const params = useLoaderData() as RouteParams;
  // const dispatch = useBrandDispatch();

  const { videos, loading } = useVideo(category);
  console.log('loading: ', loading);
  console.log('videos: ', videos);

  const navigate = useNavigate();
  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById(targetId);
      console.log(el);
      if (el) {
        el.scrollIntoView({ behavior: 'instant' });
      }
    }, 100);
  }, [targetId]);

  const handleClick = (id: string): void => navigate(`/${id}`);

  return (
    <>
      {videos && (
        <Container>
          {videos
            .filter(v => v.brand?.brand_name === params.brand)
            .map((v: Video) => (
              <VideoListItem
                id={v.youtube_video_id}
                key={v.id}
                videoId={v.youtube_video_id}
                handleClick={handleClick}
              />
            ))}
        </Container>
      )}
    </>
  );
};

export default VideoList;
