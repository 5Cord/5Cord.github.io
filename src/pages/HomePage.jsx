import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Arrow from '../image/Arrow.svg';
import iconButton from '../image/iconButton.svg';
import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import cl from '../App.module.scss';
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
function HomePage() {
    const swiperRef = useRef(null);
    const [countPage, setCountPage] = useState(0);
    const [showStackProject, setshowStackProject] = useState(false);

    const handleCaseClick = () => {
        changePage(swiperRef.current, 'next', setCountPage);
    };

    const handleCaseClickPrev = () => {
        changePage(swiperRef.current, 'prev', setCountPage);
    };
    return (
        <>
            <Swiper
                modules={[Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className={cl.fullPageSwiper}
            >
                <SwiperSlide><div className={cl.contrainer_center}>
                    <div className={`${cl.contrainer_center_up} ${cl.contrainer_center_text}`}>Vaytovich Dmitriy</div>
                    <div className={`${cl.contrainer_center_down} ${cl.contrainer_center_text}`}>Frontend разработчик</div>
                </div></SwiperSlide>
                <SwiperSlide><div className={`${cl.contrainer_center} ${cl.contrainer_center_title}`}>
                    <div className={`${cl.contrainer_center_up} ${cl.contrainer_center_text}`}>Сайт предприятия</div>
                    <div className={`${cl.button_viewProject} ${cl.contrainer_center_text}`}>
                        <Link to="/page">
                            <button
                                onMouseEnter={() => setshowStackProject(true)}
                                onMouseLeave={() => setshowStackProject(false)}>
                                View Project
                                <img src={iconButton} alt="" />
                            </button>
                        </Link>
                    </div>
                    <div className={showStackProject ? cl.button_viewProject_block_view : cl.button_viewProject_block}>
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
export default HomePage
