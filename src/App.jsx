import React, { useEffect } from 'react';
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import useMouseParallax from './useParallax';
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
import { AdminPage } from './pages/AdminPage';

function App() {
  const location = useLocation();
  const slow   = useMouseParallax(0.02);
  const medium = useMouseParallax(0.04);
  const fast   = useMouseParallax(0.07);

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
        <img className={cl.star} src={Star} alt="Star"
          style={{ transform: `translateX(calc(-50% + ${slow.x}px)) translateY(${slow.y}px)` }} />
        <img className={cl.ringUp} src={RingUp} alt="RingUp"
          style={{ transform: `translate(${fast.x}px, ${fast.y}px)` }} />
        {!isPageRoute && (
          <img className={cl.ringDown} src={RingDown} alt="RingDown"
            style={{ transform: `translate(${medium.x}px, ${medium.y}px)` }} />
        )}
      </div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='page/:id' element={<Page />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;