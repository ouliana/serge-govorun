import { ButtonWrapper } from './style';
import { StyledLogOut, StyledPencil, StyledTrash } from '../theme';

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
