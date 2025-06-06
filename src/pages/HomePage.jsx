import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../image/Arrow.svg';
import { Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import cl from '../App.module.scss';
import axios from 'axios';
import LottieAnimation from '../widgers/LottieAnimation';

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
    const [titles, setTitles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showStackProjects, setShowStackProjects] = useState({});
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/project`);
            setTitles(response.data);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
            setError('Не удалось загрузить данные');
        } finally {
            setLoading(false);
        }
    };

    const handleCaseClick = () => {
        changePage(swiperRef.current, 'next', setCountPage);
        setIsEnd(swiperRef.current.isEnd);  // Проверяем, достигли ли конца
    };

    const handleCaseClickPrev = () => {
        changePage(swiperRef.current, 'prev', setCountPage);
        setIsEnd(swiperRef.current.isEnd);  // Проверяем, достигли ли конца
    };

    return (
        <>
            {loading ? (
                <div>Загрузка...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <>
                    <Swiper
                        direction="vertical"
                        modules={[Scrollbar, A11y, Mousewheel]} // Подключаем модуль Mousewheel
                        mousewheel={true} // Включаем прокрутку слайдов колесом мыши
                        spaceBetween={50}
                        slidesPerView={1}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setIsEnd(swiper.isEnd);  // Устанавливаем начальное значение
                        }}
                        onSlideChange={() => setIsEnd(swiperRef.current.isEnd)}  // Обновляем состояние на изменение слайда
                        className={cl.fullPageSwiper_mobile}
                        noSwiping={true}
                        noSwipingClass={cl.noSwipe}
                    >
                        <SwiperSlide>
                            <div className={cl.contrainer_center}>
                                <div className={`${cl.contrainer_center_up} ${cl.contrainer_center_text}`}>Vaytovich Dmitriy</div>
                                <div className={`${cl.contrainer_center_down} ${cl.contrainer_center_text}`}>Frontend разработчик</div>
                                <LottieAnimation />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${cl.contrainer_center} ${cl.contrainer_center_title}`}>
                                <div className={cl.container_block}>
                                    {titles.map((item, index) => (
                                        <Link key={index} to={`/page/${item.id}`} className={cl.link}>
                                            <div className={cl.block} style={{
                                                // backgroundImage: `url(${item.fullI})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                            }}>
                                                <div className={cl.overlay}></div>
                                                <img src={item.miniI} alt="little_img" className={cl.white_icon} />
                                                <div className={cl.cont_block_text}>
                                                    <div className={cl.block_text}>{item.title}</div>
                                                    <div className={cl.block_stack}>{item.stack}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        modules={[Scrollbar, A11y, Mousewheel]} 
                        spaceBetween={50}
                        slidesPerView={1}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setIsEnd(swiper.isEnd);  // Устанавливаем начальное значение
                        }}
                        onSlideChange={() => setIsEnd(swiperRef.current.isEnd)}  // Обновляем состояние на изменение слайда
                        className={cl.fullPageSwiper}
                        mousewheel={true}
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
                                        <Link to={`/page/${item.id}`}>
                                            <button
                                                onMouseEnter={() => setShowStackProjects((prev) => ({ ...prev, [index]: true }))}
                                                onMouseLeave={() => setShowStackProjects((prev) => ({ ...prev, [index]: false }))}
                                            >
                                                View Project
                                                <img src={item.miniI} alt="" />
                                            </button>
                                        </Link>
                                    </div>
                                    <div className={showStackProjects[index] ? cl.button_viewProject_block_view : cl.button_viewProject_block}>
                                        {item.stack.split(', ').map((tech, techIndex) => (
                                            <div key={techIndex} className={cl.button_viewProject_point}>
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {!isEnd && (  // Показываем кнопку только если это не конец
                        <div className={cl.arrowCase} onClick={handleCaseClick}>
                            <div className={cl.case_text}>Кейсы</div>
                            <img src={Arrow} className={cl.case_arrow} alt="Arrow" />
                        </div>
                    )}
                    {countPage ? (
                        <div className={cl.arrowCasePrev} onClick={handleCaseClickPrev}>
                            <img src={Arrow} className={cl.case_arrowPrev} alt="Arrow" />
                            <div className={cl.case_text}>Назад</div>
                        </div>
                    ) : null}
                </>
            )}
        </>
    );
}

export default HomePage;
