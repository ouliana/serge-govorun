import { Video } from '../../shared/Video';
import { StyledTable, TableContainer, Td, Th } from './styles';
interface Props {
  video: Video;
}

const VideoDetails = ({ video }: Props) => {
  return (
    <TableContainer>
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
    </TableContainer>
  );
};

export default VideoDetails;
