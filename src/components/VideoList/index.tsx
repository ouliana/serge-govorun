import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';

import { remult } from 'remult';
import { Video } from '../../shared/Video';
import { Category } from '../../shared/Category';
import VideoListItem from '../VideoListItem';
import { Container } from './styled';
import { Brand } from '../../shared/Brand';

interface Params {
  brand: string;
  category: string;
}

const VideoList = () => {
  const params = useLoaderData() as Params;

  const [videos, setVideos] = useState<Video[]>([]);

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

  const fetchData = async (): Promise<Video[]> => {
    let result: Video[] = [];

    if (params.category === 'all') {
      result = await remult.repo(Video).find();
      return result;
    }

    if (params.brand === 'all') {
      result = await remult.repo(Video).find({
        where: {
          category: await remult.repo(Category).find({
            where: {
              category_name: params.category,
            },
          }),
        },
      });
      return result;
    }

    result = await remult.repo(Video).find({
      where: {
        category: await remult.repo(Category).find({
          where: {
            category_name: params.category,
          },
        }),
        brand: await remult.repo(Brand).find({
          where: {
            brand_name: params.brand,
          },
        }),
      },
    });
    return result;
  };

  useEffect(() => {
    (async () => {
      const data = await fetchData();
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
