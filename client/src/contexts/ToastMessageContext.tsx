import { createContext, useReducer } from 'react';
import { ActionKind, Message, MessageKind } from '../types';

type Action = {
  type: ActionKind;
  payload: Message;
};

interface State {
  message: Message;
}

const initialState: State = {
  message: {
    content: '',
    kind: MessageKind.NONE,
  },
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionKind.SET:
      return { message: action.payload };
    case ActionKind.CLEAR:
      return {
        message: {
          content: '',
          kind: MessageKind.NONE,
        },
      };
    default:
      return state;
  }
};

const ToastMessageContext = createContext<{
  messageState: State;
  messageDispatch: React.Dispatch<Action>;
}>({
  messageState: {
    message: {
      content: '',
      kind: MessageKind.NONE,
    },
  },
  messageDispatch: () => undefined,
});

export const ToastMessageContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [messageState, messageDispatch] = useReducer(reducer, initialState);

  return (
    <ToastMessageContext.Provider value={{ messageState, messageDispatch }}>
      {children}
    </ToastMessageContext.Provider>
  );
};

export default ToastMessageContext;
