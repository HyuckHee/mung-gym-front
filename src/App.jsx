import { React, useRef } from 'react';
import LogoPage from './pages/logoPage'
import Home from './pages/home'
import UserAge from './pages/userAge'
import UserKneecap from './pages/userKneecap'
import UserName from './pages/userName'
import UserSurgery from './pages/userSurgery'

import { Outlet,Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Outlet/>} >
        <Route index element={<LogoPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/userAge' element={<UserAge />} />
        <Route path='/userKneecap' element={<UserKneecap />} />
        <Route path='/userName' element={<UserName />} />
        <Route path='/userSurgery' element={<UserSurgery />} />
      </Route>
    </Routes>
  );
}

export default App;
