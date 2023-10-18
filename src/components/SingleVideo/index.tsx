import { useLoaderData, useNavigate } from 'react-router-dom';
import { Player } from './styles';

interface data {
  src: string;
  targetId: string;
}

const SingleVideo = () => {
  const data = useLoaderData() as data;
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() =>
          navigate('/videos', { state: { targetId: data.targetId } })
        }
      >
        Back
      </button>
      <Player
        allowFullScreen={true}
        src={data.src}
      />
    </>
  );
};

export default SingleVideo;
