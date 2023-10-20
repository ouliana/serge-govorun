import { useEffect } from 'react';
import { Outlet } from 'react-router';
import NavBar from '../NavBar';
import { Content, Page } from '../theme';
import { useTranslation } from 'react-i18next';

const SecondaryPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('serge');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Page>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </Page>
  );
};

export default SecondaryPage;
