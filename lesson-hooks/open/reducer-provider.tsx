import * as React from 'react';

const ReducerContext = React.createContext({
  visible: false,
  text: ``,
  show: (text?: string) => {},
  hide: () => {}
});
      
export const useReducer = () => React.useContext(ReducerContext);


interface State {
  visible: boolean;
  text: string;
};


enum ActionType {
  SHOW = `show`,
  HIDE = `hide`
};

interface Action {
  type: ActionType;
  payload?: any;
}


const reducer = (state: State, action: Action) => {

  switch (action.type) {
    case `show`:
      console.log(`action: `, action);
      return { ...state, visible: true, text: action.payload || `` }
    
    case `hide`:
      return { ...state, visible: false, text: `` }
    
    default: return state;
  }
};


type Props = {
  children: JSX.Element;
};


const ReducerProvider: React.FC<Props> = ({ children }) => {

  const [state, dispatch] = React.useReducer(reducer, {
    visible: false,
    text: ""
  });

  const show = (text?: string) => dispatch({ type: ActionType.SHOW, payload: text });
  const hide = () => dispatch({ type: ActionType.HIDE });


  return (
    <ReducerContext.Provider
      value={{
        visible: state.visible,
        text: state.text,
        show,
        hide
      }}
    >
      {children}
    </ReducerContext.Provider>
  )
};

export default ReducerProvider;