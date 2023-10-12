import { useState, useEffect } from 'react';
import { remult } from 'remult';
import { Short } from '../../shared/short';
import  ShortVideo from '../ShortVideo';
import Container from "./StyledContainer";

const shortsRepo = remult.repo(Short)

const ShortVideoList = () => {
  const [shorts, setShorts] = useState<Short[]>([]);

  useEffect(() => {
    shortsRepo.find().then(setShorts);
  }, []);

  return <Container>
    {shorts.map((short: Short) => <ShortVideo videoId={short.videoId} key={short.videoId} />)}
  </Container>
};

export default ShortVideoList;
