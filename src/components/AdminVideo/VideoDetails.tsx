import { useState } from 'react';
import { Video } from '../../shared/Video';
import {
  ButtonGroup,
  DetailsWrapper,
  StyledTable,
  TableWrapper,
  Td,
  Th,
} from './styles';
import IconButton from '../Button';
import AdminVideoModal from '../AdminVideoModal';
interface Props {
  video: Video;
}

const VideoDetails = ({ video }: Props) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <DetailsWrapper>
      <ButtonGroup>
        <IconButton
          icon='pencil'
          onClick={() => {
            props.setOpenModal('default');
          }}
        />
        <IconButton
          icon='trash'
          onClick={() => {}}
        />
        <AdminVideoModal
          openModal={props.openModal}
          setOpenModal={props.setOpenModal}
          video={video}
        />
      </ButtonGroup>
      <TableWrapper>
        <StyledTable>
          <tbody>
            <tr>
              <Th></Th>
              <Th>EN</Th>
              <Th>RU</Th>
            </tr>
            <tr>
              <Th>Название</Th>
              <Td>{video.title_en}</Td>
              <Td>{video.title_ru}</Td>
            </tr>
            <tr>
              <Th>Формат</Th>
              <Td>{video.format.format_name}</Td>
              <Td>{video.format.format_name}</Td>
            </tr>
            <tr>
              <Th>VideoID</Th>
              <Td>{video.youtube_video_id}</Td>
              <Td>{video.youtube_video_id}</Td>
            </tr>
            <tr>
              <Th>Категория</Th>
              <Td>{video.category.category_name_en}</Td>
              <Td>{video.category.category_name_ru}</Td>
            </tr>
            <tr>
              <Th>Бренд</Th>
              <Td>{video.brand.brand_name_en}</Td>
              <Td>{video.brand.brand_name_ru}</Td>
            </tr>
            <tr>
              <Th>Описание</Th>
              <Td>{video.description_en}</Td>
              <Td>{video.description_ru}</Td>
            </tr>
          </tbody>
        </StyledTable>
      </TableWrapper>
    </DetailsWrapper>
  );
};

export default VideoDetails;
