import { createContext, useReducer } from 'react';
import { ActionKind, Category } from '../types';

type Action = {
  type: ActionKind.SET;
  payload: Category[];
};

interface State {
  categories: Category[];
}

const initialState: State = { categories: [] as Category[] };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionKind.SET:
      return { categories: action.payload };
    default:
      return state;
  }
};

const CategoryContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { categories: [] as Category[] },
  dispatch: () => undefined,
});

export const CategoryContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
