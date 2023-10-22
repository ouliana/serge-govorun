import { StyledPencil, StyledTrash } from '../theme';
import { TitleWrapper, Image, Title, Container, ButtonGloup } from './styles';

interface Props {
  imageSrc: string;
  title: string;
}

const VideoTitle = ({ imageSrc, title }: Props) => {
  return (
    <TitleWrapper>
      <Image src={imageSrc} />
      <Title>{title}</Title>
    </TitleWrapper>
  );
};

export default VideoTitle;
