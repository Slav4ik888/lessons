import React from 'react';
// import logoSvg from './assets/logo.svg';
// import { ReactComponent as LogoSvg } from './assets/logo.svg';
import { UploadFile } from './features/upload-file';
import s from './app.module.scss';
console.log('s: ', s);

export const App = () => {
  console.log('App');

  return (
    <div className={s.root}>
      <h1 className={s.title}>Upload File!</h1>
      {/* <img src={logoSvg} alt="Logo" /> */}
      {/* <LogoSvg /> */}
      <UploadFile multiple onFinish={(files) => {console.log(`END:`, files);}}/>
      
    </div>
  )
};
