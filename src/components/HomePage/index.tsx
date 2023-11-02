// import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import About from '../About';
import NavBar from '../NavBar';
import { Content, Page } from '../theme';
import VideoList from '../VideoList';

const HomePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('serge');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <NavBar />
      <Content>
        <About />
        <VideoList />
      </Content>
    </Page>
  );
};

export default HomePage;
