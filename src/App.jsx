import React, { useRef, useEffect, useState } from 'react';
import MyFace from './image/MyFace.png';
import Arrow from './image/Arrow.svg';
import Star from './image/Star.svg';
import RingUp from './image/RingUp.svg';
import RingDown from './image/RingDown.svg';
import iconButton from './image/iconButton.svg';
import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainMenu from './widgers/MainMenu';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import cl from './App.module.scss';
const changePage = (swiper, direction, setCount) => {
  if (swiper) {
    if (direction === 'next') {
      swiper.slideNext();
      setCount((prevCount) => prevCount + 1);
    } else {
      swiper.slidePrev();
      setCount((prevCount) => prevCount - 1);
    }
  }
};
function App() {
  const swiperRef = useRef(null);
  const [countPage, setCountPage] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleCaseClick = () => {
    changePage(swiperRef.current, 'next', setCountPage);
  };

  const handleCaseClickPrev = () => {
    changePage(swiperRef.current, 'prev', setCountPage);
  };

  const handleMenu = (event) => {
    event.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [showMenu]);
  return (
    <>
      <div className={cl.baground}>
        <img className={cl.star} src={Star} alt="" />
        <img className={cl.ringUp} src={RingUp} alt="" />
        <img className={cl.ringDown} src={RingDown} alt="" />
      </div>
      <div className={cl.header}>
        <div className={cl.header_logo}>
          <img src={MyFace} className={cl.header_logo_img} alt="MyFace" />
          <div className={cl.header_logo_text}>VD</div>
        </div>
        <div className={cl.header_menu} onClick={handleMenu}>
          <div className={cl.header_menu_pointMenu}></div>
          <div className={cl.header_menu_pointMenu}></div>
          <div className={cl.header_menu_pointMenu}></div>
        </div>
      </div>
      <MainMenu show={showMenu} />
      <Swiper
        modules={[Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Сохранение ссылки на Swiper
        }}
        className={cl.fullPageSwiper}
      >
        <SwiperSlide><div className={cl.contrainer_center}>
          <div className={`${cl.contrainer_center_up} ${cl.contrainer_center_text}`}>Vaytovich Dmitriy</div>
          <div className={`${cl.contrainer_center_down} ${cl.contrainer_center_text}`}>Frontend разработчик</div>
        </div></SwiperSlide>
        <SwiperSlide><div className={cl.contrainer_center}>
          <div className={`${cl.contrainer_center_up} ${cl.contrainer_center_text}`}>Сайт предприятия</div>
          <div className={`${cl.button_viewProject} ${cl.contrainer_center_text}`}><button onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>View Project <img src={iconButton} alt="" /></button> </div>
          <div className={cl.button_viewProject_block}>
            <div className={cl.button_viewProject_point}>HTML</div>
            <div className={cl.button_viewProject_point}>SCSS</div>
            <div className={cl.button_viewProject_point}>PHP</div>
            <div className={cl.button_viewProject_point}>Mysql</div>
            <div className={cl.button_viewProject_point}>JS</div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <div className={cl.arrowCase} onClick={handleCaseClick}>
        <div className={cl.case_text}>Кейсы</div>
        <img src={Arrow} className={cl.case_arrow} alt="Arrow" />
      </div>
      {countPage ? (<div className={cl.arrowCasePrev} onClick={handleCaseClickPrev}>
        <img src={Arrow} className={cl.case_arrowPrev} alt="Arrow" />
        <div className={cl.case_text}>Назад</div>
      </div>) : ''}

    </>
  )
}
export default App
