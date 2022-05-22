import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useReducer } from './reducer-provider';



const AlertReducer: React.FC = () => {
  const alert = useReducer();
  if (!alert.visible) return null;

  return (
    <Dialog
      sx={{ width: `400px`, height: `300px`, backgroundColor: `#999` }}
      open={alert.visible}
      onClose={alert.hide}
    >
      <p onClick={alert.hide}>{alert.text}</p>
    </Dialog>
  )
}

export default AlertReducer;