import * as React from 'react';
import Box from '@mui/material/Box';
import { useOpen } from './open/open-provider';
import { useReducer } from './open/reducer-provider';

function useLogger(value: string) {
  React.useEffect(() => {
    console.log(`valueChange`, value);
  }, [value]);
};


function useInput(initValue: string) {
  const [value, setValue] = React.useState(initValue);
  const onChange = (e: any) => setValue(e.target.value);

  const clear = () => setValue(``);

  return {
    bind: { value, onChange },
    value, clear
  }
}


const Main: React.FC = () => {
  const { toggle } = useOpen();
  const { show } = useReducer();

  
  const input = useInput(``);
  const secondInput = useInput(``);

  useLogger(input.value);

  const handleClear = () => {
    input.clear();
    secondInput.clear();
  };
  
  return (
    <Box>
      <h2>Привет в примере с Context: {input.value}</h2>
      <button onClick={toggle}>Показать alert</button>
      <button onClick={() => show(`Привет это REDUCER Alert`)}>Показать useReducer</button>
      <hr />
      <input type="text" {...input.bind} />
      <hr />
      <input type="text" {...secondInput.bind} />
      <h2>{secondInput.value}</h2>
      <button onClick={handleClear}>CLEAR</button>
    </Box>
  )
}

export default Main;