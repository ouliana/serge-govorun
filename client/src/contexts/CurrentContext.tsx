import { createContext, useReducer } from 'react';
import { ActionKind } from '../types';

type Action = {
  type: ActionKind.SET;
  payload: string;
};

interface State {
  current: string;
}

const initialState: State = { current: '' };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionKind.SET:
      return { current: action.payload };
    default:
      return state;
  }
};

const CurrentContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { current: '' },
  dispatch: () => undefined,
});

export const CurrentContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CurrentContext.Provider value={{ state, dispatch }}>
      {children}
    </CurrentContext.Provider>
  );
};

export default CurrentContext;
