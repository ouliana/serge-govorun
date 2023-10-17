import { Route, Routes } from 'react-router-dom';

import { Page } from './components/theme';
import Home from './components/Home';
import VideoPage from './components/VideoPage';

const App = () => {
  return (
    <Page>
      <Routes>
        <Route
          path='/videos/:id'
          element={<VideoPage />}
        />
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </Page>
  );
};

export default App;
