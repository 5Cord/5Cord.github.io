import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Star from './image/Star.svg';
import RingUp from './image/RingUp.svg';
import RingDown from './image/RingDown.svg';
import { Test } from './pages/Test';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import cl from './App.module.scss';
import { Layout } from './component/Layout';
import HomePage from './pages/HomePage';
function App() {
  return (
    <>
      <div className={cl.baground}>
        <img className={cl.star} src={Star} alt="" />
        <img className={cl.ringUp} src={RingUp} alt="" />
        <img className={cl.ringDown} src={RingDown} alt="" />
      </div>
      <Routes>
        <Route>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/test' element={<Test />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
export default App
