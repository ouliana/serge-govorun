import './i18n/config';
import { useTranslation } from 'react-i18next';

import ShortVideoList from "./components/ShortVideoList"
import VideoPlayer from "./components/VideoPlayer"
import { useEffect } from 'react';
import SignIn from './components/SignIn';


const App = () => {
  const { t } = useTranslation();

  useEffect(() => { document.title = t('title') }, []);
  
  return (
    <>
      <h1 className="text-3l font-bold text-red-500">Serge Govorun</h1>
      <SignIn />
      <VideoPlayer videoId="ZHsh8LnlebM"  />
      <ShortVideoList  />
    </>
  )
}

export default App
