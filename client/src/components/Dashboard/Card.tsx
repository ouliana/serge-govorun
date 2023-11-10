import { useNavigate } from 'react-router-dom';
import { ButtonGroup, CardContainer, CardText } from './styles';
import IconButton from '../Button';

interface Props {
  name: string;
  text: string;
  path: string;
  onAdd?: (event: React.SyntheticEvent) => void;
  onEdit?: (event: React.SyntheticEvent) => void;
}

const Card = ({ name, text, path, onAdd, onEdit }: Props) => {
  const navigate = useNavigate();

  const ListButton = () => {
    if (onEdit) return null;
    return (
      <IconButton
        icon='list'
        onClick={() => navigate(`/admin/${path}`)}
      />
    );
  };

  const AddButton = () => {
    if (onEdit || !onAdd) return null;
    return (
      <IconButton
        icon='add'
        onClick={onAdd}
      />
    );
  };

  const EditButton = () => {
    if (!onEdit) return null;
    return (
      <IconButton
        icon='pencil'
        onClick={onEdit}
      />
    );
  };

  return (
    <CardContainer>
      <h5>{name}</h5>
      <CardText>{text}</CardText>
      <ButtonGroup>
        <ListButton />
        <AddButton />
        <EditButton />
      </ButtonGroup>
    </CardContainer>
  );
};

export default Card;
