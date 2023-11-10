import { createContext, useReducer } from 'react';
import { AboutParagraph, ActionKind } from '../types';

type Action = {
  type: ActionKind.SET;
  payload: AboutParagraph[];
};

interface State {
  paragraphs: AboutParagraph[];
}

const initialState: State = { paragraphs: [] as AboutParagraph[] };

const reducer = (state: State, action: Action) => {
  console.log('action: ', action);
  switch (action.type) {
    case ActionKind.SET:
      console.log(action.payload);
      return { paragraphs: action.payload };
    default:
      return state;
  }
};

const AboutContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { paragraphs: [] as AboutParagraph[] },
  dispatch: () => undefined,
});

export const AboutContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AboutContext.Provider value={{ state, dispatch }}>
      {children}
    </AboutContext.Provider>
  );
};

export default AboutContext;
