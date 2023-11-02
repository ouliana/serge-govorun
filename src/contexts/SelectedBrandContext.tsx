import { createContext, useReducer } from 'react';
import { ActionKind } from '../types';

type Action = {
  type: ActionKind.SET;
  payload: string;
};

interface State {
  selectedBrand: string;
}

const initialState: State = { selectedBrand: '' };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionKind.SET:
      return { selectedBrand: action.payload };
    default:
      return state;
  }
};

const SelectedBrandContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { selectedBrand: '' },
  dispatch: () => undefined,
});

export const SelectedBrandContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SelectedBrandContext.Provider value={{ state, dispatch }}>
      {children}
    </SelectedBrandContext.Provider>
  );
};

export default SelectedBrandContext;
