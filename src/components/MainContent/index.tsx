import { Outlet, useNavigate } from 'react-router-dom';
// import VideoList from '../VideoList';

const MainContent = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3 onClick={() => navigate('/videos')}>Promotion</h3>
      {/* <VideoList /> */}
      <Outlet />
    </>
  );
};

export default MainContent;
