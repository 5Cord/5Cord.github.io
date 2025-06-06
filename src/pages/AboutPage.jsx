import iconT from '../image/iconT.png';
import iconG from '../image/iconG.png';
import MyFaceBig from '../image/bigFace.png';
import cl from './AboutStyle.module.scss';
import Star from '../image/Star.svg';
function About() {
    return (
        <>
            <div className={cl.container}>
                <h1> <b>Привет!</b> Я молодой <br></br>
                    Frontend developer</h1>
                <div className={cl.container_myFace}><img src={MyFaceBig} alt="" /></div>
                <div className={cl.container_tecnology}>
                    <h1>Стэк технологий</h1>
                    <div className={cl.container_stack}>
                        <div className={cl.point_stack}>HTML</div>
                        <div className={cl.point_stack}>SCSS</div>
                        <div className={cl.point_stack}>Vite</div>
                        <div className={cl.point_stack}>BEM</div>
                        <div className={cl.point_stack}>MySQL</div>
                        <div className={cl.point_stack}>JS</div>
                        <div className={cl.point_stack}>React</div>
                        <div className={cl.point_stack}>Node js</div>
                        <div className={cl.point_stack}>PHP</div>
                    </div>
                </div>
                <div className={cl.container_experience}>
                    <h1>Опыт работы</h1>
                    <div className={cl.container_experience_description}>
                        <p className={cl.title_experience}>АО БелЗан <br></br>Инженер-программист</p>
                        <div className={cl.cointainer_dates_work}>
                            <p className={cl.dates_work}>Август 2021 — август 2022</p>
                            <p className={cl.dates_work}>(1 Год)</p>
                        </div>
                        <div className={cl.experience_description}>
                            <div>Разработал корпоративный сайт для предприятия АО "БелЗан" + для полного администрирования реализована CRUD система (это моя дипломная работа).</div>
                            <div>Также разработал приложение для управления данными о пропусках и персонале. Реализовал: фильтрацию, поиск, добавление примечаний и просмотр информации о рабочих которые прошли через систему пропусков. Экспортирование/импортирование данных соответственно Получившееся приложение готово к коммерческому использованию.</div>
                        </div>
                    </div>
                </div>
                <div className={cl.startBetween}>
                    <img src={Star} alt="" />
                </div>
                <div className={cl.container_experience}>
                    <div className={cl.container_experience_description}>
                        <p className={cl.title_experience}>Freelance</p>
                        <div className={cl.cointainer_dates_work}>
                            <p className={cl.dates_work}>Май 2023 - по Н.В.</p>
                        </div>
                        <div className={cl.experience_description}>
                            <div>Современный онлайн-магазин напольных покрытий с уникальной административной панелью. Использованы HTML, SCSS, PHP, MySQL. Функционал: каталог продукции, страницы товаров, корзина, оформление заказа, личный кабинет, админка.</div>
                            <div>Онлайн сервис для записи на процедуры в спа салоне с административной панелью. Использованы HTML, SCSS, PHP, MySQL. Функционал: выбор процедур, онлайн-запись, личный кабинет, админка.</div>
                            <div>Интернет-магазин кроссовок на стеке MERN (MongoDB, Express.js, React, Node.js). Функционал: каталог кроссовок, страницы продуктов, корзина, оформление заказа, личный кабинет, админка.</div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className={cl.footer_text}>Frontend-developer</div>
                <a target='_blank' href="https://t.me/vaydmitry"><img src={iconT} alt="iconTelegram" /></a>
                <a target='_blank' href="https://github.com/5Cord"><img src={iconG} alt="iconGHub" /></a>
            </footer>
        </>
    )
}

export { About }