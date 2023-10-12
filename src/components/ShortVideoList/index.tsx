import { useState, useEffect } from 'react';
import { remult } from 'remult';
import { Video } from '../../shared/video';
import  ShortVideo from '../ShortVideo';
import Container from "./StyledContainer";

const shortsRepo = remult.repo(Video)

const ShortVideoList = () => {
  const [shorts, setShorts] = useState<Video[]>([]);

  useEffect(() => {
  (async () => {
    try {
      const videos = await shortsRepo.find();
      setShorts(videos.filter(v => v.isShort))
    } catch (e) {
      throw new Error('Could not fetch data')
    }
  })();
  }, []);

  return <Container>
    {shorts.map((short: Video) => <ShortVideo videoId={short.videoId} key={short.videoId} />)}
  </Container>
};

export default ShortVideoList;
