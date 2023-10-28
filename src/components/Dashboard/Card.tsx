import { useNavigate } from 'react-router-dom';
import { ButtonGroup, CardContainer, CardText } from './styles';
import IconButton from '../Button';

interface Props {
  name: string;
  text: string;
  path: string;
  onAdd?: (event: React.SyntheticEvent) => void;
}

const Card = ({ name, text, path, onAdd }: Props) => {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <h5>{name}</h5>
      <CardText>{text}</CardText>
      <ButtonGroup>
        <IconButton
          icon='list'
          onClick={() => navigate(`/admin/${path}`)}
        />
        {onAdd && (
          <IconButton
            icon='add'
            onClick={onAdd}
          />
        )}
      </ButtonGroup>
    </CardContainer>
  );
};

export default Card;
