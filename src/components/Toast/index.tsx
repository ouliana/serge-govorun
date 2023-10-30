// import { Toast } from 'flowbite-react';
import { HiCheck, HiX, HiExclamation } from 'react-icons/hi';
import { Content, IconDelete, IconSuccess, StyledTost } from './styles';
import { useContext } from 'react';
import ToastMessageContext from '../../contexts/ToastMessageContext';
import { MessageKind } from '../../types';

const TostSuccess = ({ message }: { message: string }) => {
  return (
    <StyledTost>
      <IconSuccess>
        <HiCheck className='h-5 w-5' />
      </IconSuccess>
      <Content>{message}</Content>
    </StyledTost>
  );
};

const TostDelete = ({ message }: { message: string }) => {
  return (
    <StyledTost>
      <IconDelete>
        <HiX className='h-5 w-5' />
      </IconDelete>
      <Content>{message}</Content>
    </StyledTost>
  );
};

const TostError = ({ message }: { message: string }) => {
  return (
    <StyledTost>
      <IconDelete>
        <HiExclamation className='h-5 w-5' />
      </IconDelete>
      <Content>{message}</Content>
    </StyledTost>
  );
};

const Toast = () => {
  const { messageState } = useContext(ToastMessageContext);
  const { content, kind } = messageState.message;

  if (kind === MessageKind.NONE) return null;

  if (kind === MessageKind.SUCCESS) return <TostSuccess message={content} />;
  if (kind === MessageKind.DELETE) return <TostDelete message={content} />;
  if (kind === MessageKind.ERROR) return <TostError message={content} />;
};

export default Toast;
