import useVideo from '../../hooks/useVideo';
import { Accordion } from 'flowbite-react';
import AccordionItem from './AccordionItem';
import { StyledAccordion } from './styles';

const AdminVideo = () => {
  const { videos } = useVideo();
  return (
    <StyledAccordion>
      {videos.map(v => (
        <Accordion.Panel key={v.id}>
          <AccordionItem video={v} />
        </Accordion.Panel>
      ))}
    </StyledAccordion>
  );
};

export default AdminVideo;
