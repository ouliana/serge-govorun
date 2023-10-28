import {
  StyledAdd,
  StyledGrid,
  StyledList,
  StyledLogOut,
  StyledPencil,
  StyledTrash,
} from '../adminStyles';
import { ButtonWrapper } from './style';

interface Props {
  icon: string;
  onClick: (event: React.SyntheticEvent) => void;
}

const IconButton = ({ icon, onClick }: Props) => {
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
