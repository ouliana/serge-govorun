import { createContext, useReducer } from 'react';
import { Brand } from '../shared/Brand';
import { ActionKind } from '../types';

type Action = {
  type: ActionKind.SET;
  payload: Brand[];
};

interface State {
  brands: Brand[];
}

const initialState: State = { brands: [] as Brand[] };

const reducer = (state: State, action: Action) => {
  console.log('action: ', action);
  switch (action.type) {
    case ActionKind.SET:
      console.log(action.payload);
      return { brands: action.payload };
    default:
      return state;
  }
};

const BrandsContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { brands: [] as Brand[] },
  dispatch: () => undefined,
});

export const BrandsContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrandsContext.Provider value={{ state, dispatch }}>
      {children}
    </BrandsContext.Provider>
  );
};

export default BrandsContext;
