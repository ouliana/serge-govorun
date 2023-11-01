// import AdminVideo from '../AdminVideo';
import { useState } from 'react';
import Card from './Card';
// import { PlusButton } from '../theme';
import { DashboardContainer } from './styles';
import BrandModal from '../AdminBrands/BrandEditModal';
import VideoModal from '../AdminVideos/VideoModal';
import CaregoryModal from '../AdminCategories/CaregoryModal';
import AboutModal from './AboutModal';

const Dashboard = () => {
  const [openVideoModal, setOpenVideoModal] = useState<string | undefined>();
  const [openBrandModal, setOpenBrandModal] = useState<string | undefined>();
  const [openCategoryModal, setOpenCategoryModal] = useState<
    string | undefined
  >();
  const [openAboutModal, setOpenAboutModal] = useState<string | undefined>();

  return (
    <DashboardContainer>
      <Card
        name='Видео'
        text='Просмотр и редактирование информации о видео'
        path='videos'
        onAdd={() => setOpenVideoModal('default')}
      />
      <VideoModal
        openModal={openVideoModal}
        setOpenModal={setOpenVideoModal}
      />
      <Card
        name='Категории'
        text='Общие категории, к которым относятся видео'
        path='categories'
        onAdd={() => setOpenCategoryModal('default')}
      />
      <CaregoryModal
        openModal={openCategoryModal}
        setOpenModal={setOpenCategoryModal}
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
        name='Обо мне'
        text='Текст, отображающийся на стартовой странице'
        path='about'
        // onEdit={() => setOpenAboutModal('default')}
        onAdd={() => setOpenAboutModal('default')}
      />
      <AboutModal
        openModal={openAboutModal}
        setOpenModal={setOpenAboutModal}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
