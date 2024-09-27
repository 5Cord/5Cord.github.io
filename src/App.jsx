import React, { useEffect } from 'react';
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import Star from './image/Star.svg';
import RingUp from './image/RingUp.svg';
import RingDown from './image/RingDown.svg';
import { Page } from './pages/Page';
import { About } from './pages/AboutPage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import cl from './App.module.scss';
import { Layout } from './component/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import { Contact } from './pages/Contact';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      document.documentElement.style.overflow = 'scroll';
      document.documentElement.style.overflowX = 'hidden';
    } else {
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [location]);

  const isPageRoute = location.pathname === '/page';

  return (
    <>
      <div className={cl.background}>
        <img className={cl.star} src={Star} alt="Star" />
        <img className={cl.ringUp} src={RingUp} alt="RingUp" />
        {!isPageRoute && (
          <img className={cl.ringDown} src={RingDown} alt="RingDown" />
        )}
      </div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='page/:id' element={<Page />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;