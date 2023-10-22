import useVideo from '../../hooks/useVideo';
import AdminVideoListItem from '../AdminVideoListItem';

const Dashboard = () => {
  const { videos } = useVideo();
  return (
    <>
      {videos.map(v => (
        <AdminVideoListItem
          key={v.id}
          videoItem={v}
        />
      ))}
    </>
  );
};

export default Dashboard;
