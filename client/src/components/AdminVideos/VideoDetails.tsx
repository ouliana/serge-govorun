import tw from 'tailwind-styled-components';
import { StyledTable, TableWrapper, Td, Th } from './styles';
import { Video } from '../../types';
interface Props {
  video: Video;
  isOpen: boolean;
}

const VideoDetails = ({ video, isOpen }: Props) => {
  return (
    <DetailsWrapper $isOpen={isOpen}>
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

interface Details {
  $isOpen: boolean;
}

const DetailsWrapper = tw.div<Details>`
  pt-4
  pb-8
  origin-top
  transform
  ${p => (p.$isOpen ? 'animate-dropDown' : 'animate-dropUp')}

`;

export default VideoDetails;
