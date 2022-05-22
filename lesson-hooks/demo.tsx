import * as React from 'react';
import Box from '@mui/material/Box';
import Main from './main';
import Alert from './open/alert';
import AlertReducer from './open/alert-reducer';
import OpenProvider from './open/open-provider';
import ReducerProvider from './open/reducer-provider';

const Demo: React.FC = () => {
  

  return (
    <OpenProvider>
      <ReducerProvider>
        <Box sx={{ width: `300px`, mt: `150px`, margin: `auto`, backgroundColor: `#eeeeee` }}>
          <Alert />
          <Main />
          <AlertReducer />
        </Box>
      </ReducerProvider>
    </OpenProvider>
  )
}

export default Demo;