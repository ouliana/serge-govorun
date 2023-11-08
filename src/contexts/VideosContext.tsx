import { createContext, useReducer } from 'react';
import { ActionKind } from '../types';
import { Video } from '../shared/Video';

type Action = {
  type: ActionKind.SET;
  payload: Video[];
};

interface State {
  videos: Video[];
}

const initialState: State = { videos: [] as Video[] };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionKind.SET:
      return { videos: action.payload };
    default:
      return state;
  }
};

const VideosContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { videos: [] as Video[] },
  dispatch: () => undefined,
});

export const VideosContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VideosContext.Provider value={{ state, dispatch }}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideosContext;
