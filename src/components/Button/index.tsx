import {
  StyledAdd,
  StyledGrid,
  StyledList,
  StyledLogOut,
  StyledPencil,
  StyledTrash,
  StyledHome,
  StyledChevron,
} from '../adminStyles';
import { ButtonWrapper } from './style';

interface Props {
  icon: string;
  onClick: (event: React.SyntheticEvent) => void;
  rotate?: boolean;
}

const IconButton = ({ icon, onClick, rotate }: Props) => {
  const Icon = () => {
    switch (icon) {
      case 'pencil':
        return (
          <div onClick={onClick}>
            <StyledPencil />
          </div>
        );
      case 'trash':
        return (
          <div onClick={onClick}>
            <StyledTrash />
          </div>
        );
      case 'logout':
        return (
          <div onClick={onClick}>
            <StyledLogOut />
          </div>
        );
      case 'grid':
        return (
          <div onClick={onClick}>
            <StyledGrid />
          </div>
        );
      case 'add':
        return (
          <div onClick={onClick}>
            <StyledAdd />
          </div>
        );
      case 'list':
        return (
          <div onClick={onClick}>
            <StyledList />
          </div>
        );
      case 'chevron':
        return (
          <div onClick={onClick}>
            <StyledChevron $rotate={rotate ? rotate : false} />
          </div>
        );
      case 'home':
        return (
          <div onClick={onClick}>
            <StyledHome />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <ButtonWrapper>
      <Icon />
    </ButtonWrapper>
  );
};

export default IconButton;
