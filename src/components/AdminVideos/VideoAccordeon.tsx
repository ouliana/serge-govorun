import { Accordion } from 'flowbite-react';
import VideoTitle from './VideoTitle';
import VideoDetails from './VideoDetails';
import { StyledAccordeonTitle, StyledAccordion } from './styles';
import { toStillUrl } from '../../utils/utils';
import VideoModal from './VideoEditModal';
import { Button } from '../adminStyles';
import { useContext, useEffect, useState } from 'react';
import VideosContext from '../../contexts/VideosContext';
import { Video } from '../../shared/Video';
import { remult } from 'remult';
import { ActionKind } from '../../types';

const AdminVideos = () => {
  const { state, dispatch } = useContext(VideosContext);
  const { videos } = state;

  const [openModal, setOpenModal] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const data = await remult.repo(Video).find();
      dispatch({
        type: ActionKind.SET,
        payload: data,
      });
    })();
  }, [dispatch]);

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

export default AdminVideos;
