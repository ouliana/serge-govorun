import { useParams, useNavigate } from 'react-router-dom';
import { Player } from './styles';

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const src = `https://www.youtube.com/embed/${id}`;

  return (
    <>
      <button onClick={() => navigate('/', { state: { targetId: id } })}>
        Back
      </button>
      <Player
        allowFullScreen={true}
        src={src}
      />
    </>
  );
};

export default VideoPage;
