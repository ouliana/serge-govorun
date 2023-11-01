import { VideosContextProvider } from '../../contexts/VideosContext';
import VideoAccordeon from './VideoAccordeon';

const AdminVideos = () => {
  return (
    <VideosContextProvider>
      <VideoAccordeon />
    </VideosContextProvider>
  );
};

export default AdminVideos;
