import { VideosContextProvider } from '../../contexts/VideosContext';
import AdminVideoList from './AdminVideoList';
// import VideoAccordeon from './VideoAccordeon';

const AdminVideos = () => {
  return (
    <VideosContextProvider>
      {/* <VideoAccordeon /> */}
      <AdminVideoList />
    </VideosContextProvider>
  );
};

export default AdminVideos;
