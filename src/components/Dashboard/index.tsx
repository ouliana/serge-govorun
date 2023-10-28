// import AdminVideo from '../AdminVideo';
import Card from './Card';
// import { PlusButton } from '../theme';
import { DashboardContainer } from './styles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Card
        name='Видео'
        text='Просмотр и редактирование информации о видео'
        path='video'
        onAdd={() => {}}
      />
      <Card
        name='Категории'
        text='Общие категории, на которые разделяются видео'
        path='video'
        onAdd={() => {}}
      />
      <Card
        name='Бренды'
        text='Названия брендов, которые отображаются в разделе «Реклама»'
        path='video'
        onAdd={() => {}}
      />
      <Card
        name='Форматы'
        text='Аспектное соотношение сторон'
        path='video'
        onAdd={() => {}}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
