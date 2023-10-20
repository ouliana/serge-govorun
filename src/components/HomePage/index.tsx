// import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import About from '../About';
import CategoryList from '../CategoryList';
import NavBar from '../NavBar';
import { Content, Page } from '../theme';

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
        <CategoryList />
      </Content>
    </Page>
  );
};

export default HomePage;
