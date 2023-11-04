import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Content, Page } from '../theme';
import Footer from '../Footer';
import { VideoList } from '../VideoList';
import Header from '../Header';
import About from '../About';

const HomePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('serge');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <Content>
        <Header />
        <VideoList />
        <About />
      </Content>
      <Footer />
    </Page>
  );
};

export default HomePage;
