import { useState } from 'react';
import { Video } from '../../shared/Video';
import { DetailsWrapper, StyledTable, TableWrapper, Td, Th } from './styles';
import IconButton from '../Button';
import { ButtonGroup } from '../adminStyles';
import VideoEditModal from './VideoEditModal';
import VideoDeleteModal from './VideoDeleteModal';
interface Props {
  video: Video;
}

const VideoDetails = ({ video }: Props) => {
  const [openEditModal, setOpenEditModal] = useState<string | undefined>();
  const [openDeleteModal, setOpenDeleteModal] = useState<string | undefined>();

  return (
    <DetailsWrapper>
      <ButtonGroup>
        <IconButton
          icon='pencil'
          onClick={() => {
            setOpenEditModal('default');
          }}
        />
        <VideoEditModal
          openModal={openEditModal}
          setOpenModal={setOpenEditModal}
          video={video}
        />
        <IconButton
          icon='trash'
          onClick={() => {
            setOpenDeleteModal('default');
          }}
        />
        <VideoDeleteModal
          openModal={openDeleteModal}
          setOpenModal={setOpenDeleteModal}
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
              <Th>URL</Th>
              <Td>{video.url}</Td>
              <Td></Td>
            </tr>
            <tr>
              <Th>Название</Th>
              <Td>{video.title_en}</Td>
              <Td>{video.title_ru}</Td>
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
