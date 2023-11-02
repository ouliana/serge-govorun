// import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import About from '../About';
import { Content, Page } from '../theme';
import VideoList from '../VideoList';
import { SelectedBrandContextProvider } from '../../contexts/SelectedBrandContext';
import Footer from '../Footer';
// import Footer from '../Footer';

const HomePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('serge');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      {/* <NavBar /> */}
      <Content>
        <About />
        <SelectedBrandContextProvider>
          <VideoList />
        </SelectedBrandContextProvider>
      </Content>
      <Footer />
    </Page>
  );
};

export default HomePage;
