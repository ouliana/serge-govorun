import { createContext, useReducer } from 'react';
import { BrandActionKind } from './helpers';

interface Action {
  type: BrandActionKind;
  payload: string;
}

interface State {
  brand: string;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case BrandActionKind.SET:
      return { brand: action.payload };
    default:
      return state;
  }
};

const BrandContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { brand: 'All' },
  dispatch: () => undefined,
});

export const BrandContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(reducer, { brand: 'All' });

  return (
    <BrandContext.Provider value={{ state, dispatch }}>
      {children}
    </BrandContext.Provider>
  );
};

export default BrandContext;
