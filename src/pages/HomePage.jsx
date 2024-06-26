import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Arrow from '../image/Arrow.svg';
import iconButton from '../image/iconButton.svg';
import Animate from '../image/Animation.gif';
import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import cl from '../App.module.scss';
import axios from 'axios';
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

    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getTitle');
            setTitles(response.data);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    };
    return (
        <>
            <Swiper
                direction="vertical"
                modules={[Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className={cl.fullPageSwiper_mobile}
                noSwiping={true}
                noSwipingClass={cl.noSwipe}
            >
                <SwiperSlide><div className={cl.contrainer_center}>
                    <div className={`${cl.contrainer_center_up} ${cl.contrainer_center_text}`}>Vaytovich Dmitriy</div>
                    <div className={`${cl.contrainer_center_down} ${cl.contrainer_center_text}`}>Frontend разработчик</div>
                    <img src={Animate} alt="" />
                </div></SwiperSlide>
                <SwiperSlide>
                    {titles.map((item, index) => (
                        <div key={index} className={`${cl.contrainer_center} ${cl.contrainer_center_title}`}>
                            <div className={cl.container_block}>
                                <Link to={`/page`}>
                                    <div className={cl.block}>
                                        <img src={item.miniI} alt="" />
                                        <div className={cl.cont_block_text}>
                                            <div className={cl.block_text}>{item.title}</div>
                                            <div className={cl.block_stack}>HTML, CSS, PHP, JS, JQuery</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to={`/page`}>
                                    <div className={cl.block}>
                                        <img src={item.miniI} alt="" />
                                        <div className={cl.cont_block_text}>
                                            <div className={cl.block_text}>{item.title}</div>
                                            <div className={cl.block_stack}>HTML, CSS, PHP, JS, JQuery</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to={`/page`}>
                                    <div className={cl.block}>
                                        <img src={item.miniI} alt="" />
                                        <div className={cl.cont_block_text}>
                                            <div className={cl.block_text}>{item.title}</div>
                                            <div className={cl.block_stack}>HTML, CSS, PHP, JS, JQuery</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to={`/page`}>
                                    <div className={cl.block}>
                                        <img src={item.miniI} alt="" />
                                        <div className={cl.cont_block_text}>
                                            <div className={cl.block_text}>{item.title}</div>
                                            <div className={cl.block_stack}>HTML, CSS, PHP, JS, JQuery</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </SwiperSlide>
            </Swiper>
            <Swiper
                modules={[Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className={cl.fullPageSwiper}
            >
                <SwiperSlide>
                    <div className={cl.contrainer_center}>
                        <div className={`${cl.contrainer_center_up} ${cl.contrainer_center_text}`}>Vaytovich Dmitriy</div>
                        <div className={`${cl.contrainer_center_down} ${cl.contrainer_center_text}`}>Frontend разработчик</div>
                    </div>
                </SwiperSlide>
                {titles.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={`${cl.contrainer_center} ${cl.contrainer_center_title}`}>
                            <div className={`${cl.contrainer_center_up} ${cl.contrainer_center_text}`}>
                                {item.title}
                            </div>
                            <div className={`${cl.button_viewProject} ${cl.contrainer_center_text}`}>
                                <Link to={`/page`}>
                                    <button
                                        onMouseEnter={() => setshowStackProject(true)}
                                        onMouseLeave={() => setshowStackProject(false)}
                                    >
                                        View Project
                                        <img src={item.miniI} alt="" />
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
                        </div>
                    </SwiperSlide>
                ))}
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
