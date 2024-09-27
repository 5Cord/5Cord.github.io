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
import useParallax from './useParallax.jsx';

function App() {
  const isMobile = window.innerWidth < 768; // Определяем, мобильное ли устройство
  const offset1 = useParallax(isMobile ? 0 : 0.05); // Отключаем параллакс на мобильных
  const offset2 = useParallax(isMobile ? 0 : 0.03);
  const offset3 = useParallax(isMobile ? 0 : 0.04);
  
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
        <img
          className={cl.star}
          src={Star}
          alt="Star"
          style={{
            transform: `translate(${offset1.x}px, ${offset1.y}px)`,
          }}
        />
        <img
          className={cl.ringUp}
          src={RingUp}
          alt="RingUp"
          style={{
            transform: `translate(${offset2.x}px, ${offset2.y}px)`,
          }}
        />
        {!isPageRoute && (
          <img
            className={cl.ringDown}
            src={RingDown}
            alt="RingDown"
            style={{
              transform: `translate(${offset3.x}px, ${offset3.y}px)`,
            }}
          />
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
