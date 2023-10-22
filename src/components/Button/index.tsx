import { ButtonWrapper } from './style';
import { StyledLogOut, StyledPencil, StyledTrash } from '../theme';

interface Props {
  icon: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const IconButton = ({ icon }: Props) => {
  const Icon = () => {
    switch (icon) {
      case 'pencil':
        return <StyledPencil />;
      case 'trash':
        return <StyledTrash />;
      case 'logout':
        return <StyledLogOut />;
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
