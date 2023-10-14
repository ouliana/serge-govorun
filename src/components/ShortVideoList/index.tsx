import { useState, useEffect } from 'react';
import { remult } from 'remult';
import { Video } from '../../shared/Video';
import  ShortVideo from '../ShortVideo';
import Container from "./StyledContainer";
import { Format } from '../../shared/Format';

  const ShortVideoList = () => {
  
  const [shorts, setShorts] = useState<Video[]>([]);
  useEffect(() => {
    (async () => {
       const data = await remult.repo(Video).find({
        where: {
          format: await remult.repo(Format).find({
            where: {
              format_name: '9:16'
            }
          })
        }
      });
      console.table(data);
      setShorts(data)
    })();
  }, [])
    

  return <Container>
    {shorts.map((short: Video) => <ShortVideo videoId={short.youtube_video_id} key={short.id} />)}
  </Container>
};

export default ShortVideoList;
