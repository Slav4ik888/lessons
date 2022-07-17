import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigations from './components/navigations';
import FavouritsPage from './pages/favourits';
import HomePage from './pages/home';
import { Paths } from './utils/routes';


function App() {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path={Paths.ROOT} element={<HomePage />} />
        <Route path={Paths.FAVOURITES} element={<FavouritsPage />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
