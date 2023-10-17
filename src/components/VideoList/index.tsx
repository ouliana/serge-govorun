import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { remult } from 'remult';
import { Video } from '../../shared/Video';
import { Category } from '../../shared/Category';
import VideoListItem from '../VideoListItem';
import { Container } from './styled';

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const navigate = useNavigate();

  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    console.log('useEffect');
    console.log('targetId: ', targetId);

    const el = document.getElementById(targetId);
    console.log(el);
    if (el) {
      setTimeout(() => el.scrollIntoView(), 1000);
    }
  }, [targetId]);

  const handleClick = (id: string): void => {
    navigate(`/videos/${id}`);
  };

  useEffect(() => {
    (async () => {
      const data = await remult.repo(Video).find({
        where: {
          category: await remult.repo(Category).find({
            where: {
              category_name: 'Promotion',
            },
          }),
        },
      });
      // console.table(data);
      setVideos(data);
    })();
  }, []);

  return (
    <Container>
      {videos.map((v: Video) => (
        <VideoListItem
          id={v.youtube_video_id}
          key={v.id}
          videoId={v.youtube_video_id}
          handleClick={handleClick}
        />
      ))}
    </Container>
  );
};

export default VideoList;
