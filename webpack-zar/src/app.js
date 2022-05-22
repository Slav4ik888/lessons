import React from 'react';
import logoPng from './assets/logo.png';
import logoSvg from './assets/logo.svg';
// import { ReactComponent as LogoSvg } from './assets/logo.svg';
import s from './app.module.scss';
console.log('s: ', s);

export const App = () => {
  console.log('App');

  return (
    <div>
      <img src={logoPng} alt="Logo" />
      <h1 className={s.root}>Hello webpack React!</h1>
      <img src={logoSvg} alt="Logo" />
      {/* <LogoSvg /> */}
      
    </div>
  )
};
