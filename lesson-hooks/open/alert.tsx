import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useOpen } from './open-provider';



const Alert: React.FC = () => {
  const { visible, toggle } = useOpen();
  if (!visible) return null;

  return (
    <Dialog
      sx={{ width: `400px`, height: `300px`, backgroundColor: `#999` }}
      open={visible}
      onClose={toggle}
    >
      <p onClick={toggle}>Привет это Alert</p>
    </Dialog>
  )
}

export default Alert;