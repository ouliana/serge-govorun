// import AdminVideo from '../AdminVideo';
import { useState } from 'react';
import Card from './Card';
// import { PlusButton } from '../theme';
import { DashboardContainer } from './styles';
import AdminVideoModal from '../AdminVideos/AdminVideoModal';
import BrandModal from '../AdminBrands/BrandModal';

const Dashboard = () => {
  const [openVideoModal, setOpenVideoModal] = useState<string | undefined>();
  const [openBrandModal, setOpenBrandModal] = useState<string | undefined>();

  return (
    <DashboardContainer>
      <Card
        name='Видео'
        text='Просмотр и редактирование информации о видео'
        path='videos'
        onAdd={() => setOpenVideoModal('default')}
      />
      <AdminVideoModal
        openModal={openVideoModal}
        setOpenModal={setOpenVideoModal}
      />
      <Card
        name='Категории'
        text='Общие категории, к которым относятся видео'
        path='categories'
      />
      <Card
        name='Бренды'
        text='Названия брендов, которые отображаются в разделе «Реклама»'
        path='brands'
        onAdd={() => setOpenBrandModal('default')}
      />
      <BrandModal
        openModal={openBrandModal}
        setOpenModal={setOpenBrandModal}
      />
      <Card
        name='Форматы'
        text='Аспектное соотношение сторон'
        path='formats'
      />
    </DashboardContainer>
  );
};

export default Dashboard;
