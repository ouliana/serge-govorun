import useVideo from '../../hooks/useVideo';
import { Accordion } from 'flowbite-react';
import VideoTitle from './VideoTitle';
import VideoDetails from './VideoDetails';
import { StyledAccordeonTitle, StyledAccordion } from './styles';
import { toStillUrl } from '../../utils';
import VideoModal from './VideoModal';
import { Button } from '../adminStyles';
import { useContext } from 'react';

export const AdminVideos = () => {
  const { videos } = useVideo();

  const { state, dispatch } = useContext(VideoContext);
  const { brands } = state;

  const [openModal, setOpenModal] = useState<string | undefined>();

  return (
    <>
      <h4>Видео</h4>
      <Button onClick={() => setOpenModal('default')}>Добавить</Button>
      <VideoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <StyledAccordion collapseAll>
        {videos.map(v => (
          <Accordion.Panel key={v.id}>
            <StyledAccordeonTitle>
              <VideoTitle
                imageSrc={toStillUrl(v.url)}
                title={v.title_en}
              />
            </StyledAccordeonTitle>
            <Accordion.Content>
              <VideoDetails video={v} />
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </StyledAccordion>
    </>
  );
};
