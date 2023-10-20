import { Outlet } from 'react-router-dom';
import Brands from '../Brands';
import useLocaleRu from '../../hooks/useLocaleRu';

const Advertisement = () => {
  const { t } = useLocaleRu();

  return (
    <>
      <h3>{t('adv')}</h3>
      <Brands />
      <Outlet />
    </>
  );
};

export default Advertisement;
