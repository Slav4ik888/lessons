import * as React from 'react';


const OpenContext = React.createContext({
        visible: false,
        toggle: () => {}
});
      
export const useOpen = () => React.useContext(OpenContext);

// const OpenToggleContext = React.createContext(() => {});
// export const useOpenToggle = () => React.useContext(OpenToggleContext);

type Props = {
  children: JSX.Element;
}

const OpenProvider: React.FC<Props> = ({ children }) => {

  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(prev => !prev);


  return (
    <OpenContext.Provider
      value={{
        visible: open,
        toggle
      }}
    >
      {children}
    </OpenContext.Provider>
  )
};

export default OpenProvider;