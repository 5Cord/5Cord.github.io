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
                        <div className={`${cl.point_stack} ${cl.point_stack_pink}`}>HTML</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_pink}`}>SCSS</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_pink}`}>BEM</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_pink}`}>Figma</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_yellow}`}>JavaScript</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_yellow}`}>TypeScript</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_blue}`}>React</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_blue}`}>Next.js</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_blue}`}>Redux</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_blue}`}>Zustand</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_green}`}>Vite</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_green}`}>Node.js</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_green}`}>Express</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_green}`}>npm</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_orange}`}>Git</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_purple}`}>REST API</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_purple}`}>WebSockets</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_purple}`}>Socket.io</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_purple}`}>MongoDB</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_purple}`}>PostgreSQL</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_purple}`}>SQL</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_gray}`}>Sentry</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_gray}`}>PHP</div>
                        <div className={`${cl.point_stack} ${cl.point_stack_gray}`}>Linux</div>
                    </div>
                </div>
                <div className={cl.container_experience}>
                    <h1>Опыт работы</h1>
                    <div className={cl.container_experience_description}>
                        <p className={cl.title_experience}>Газпром нефть, НТЦ<br />Frontend-разработчик</p>
                        <div className={cl.cointainer_dates_work}>
                            <p className={cl.dates_work}>Ноябрь 2025 — настоящее время</p>
                            <p className={cl.dates_work}>(6 месяцев)</p>
                        </div>
                        <div className={cl.experience_description}>
                            <div>Разработал интерактивную деловую веб-игру для корпоративного обучения специалистов нефтегазовой отрасли с нуля. Платформа перевела обучение в интерактивный формат: специалисты отрабатывают полный цикл освоения месторождений в условиях ограниченного бюджета и командной конкуренции без реальных рисков.</div>
                            <div>Многопользовательский режим на базе Socket.io обеспечил одновременную работу нескольких команд в единой сессии, что масштабировало возможности корпоративных тренингов и сократило время на их организацию. Самостоятельно спроектировал архитектуру и поднял бэкенд: Node.js, Express, PostgreSQL.</div>
                            <div>Динамическая система сценариев адаптирует обучение под решения каждой команды, повышая вовлечённость и персонализируя образовательный процесс для нетехнической аудитории (геологи, менеджеры).</div>
                        </div>
                        <div className={cl.experience_stack}>
                            React 19 · Vite · Zustand · Socket.io · Node.js · Express · PostgreSQL
                        </div>
                    </div>
                </div>
                <div className={cl.startBetween}>
                    <img src={Star} alt="" />
                </div>
                <div className={cl.container_experience}>
                    <div className={cl.container_experience_description}>
                        <p className={cl.title_experience}>Газпромнефть-Цифровые решения<br />Frontend-разработчик</p>
                        <div className={cl.cointainer_dates_work}>
                            <p className={cl.dates_work}>Июнь 2025 — Сентябрь 2025</p>
                            <p className={cl.dates_work}>(4 месяца)</p>
                        </div>
                        <div className={cl.experience_description}>
                            <div>Автоматическая генерация PDF-отчётов сократила время подготовки документации с нескольких часов ручной работы до одного клика, полностью устранив копирование данных вручную и снизив вероятность ошибок при сдаче отчётности.</div>
                            <div>Внедрение Sentry с кастомными логами и контекстом сократило время обнаружения инцидентов с нескольких дней до часов, что позволило команде реагировать на проблемы до того, как они начинают влиять на пользователей.</div>
                            <div>Аналитические дашборды с фильтрацией и экспортом в Excel дали отделу инструмент для принятия решений на основе данных без привлечения разработчиков под каждый запрос. Интерфейс системы документооборота перевёл согласование и подписание документов в цифровой формат.</div>
                        </div>
                        <div className={cl.experience_stack}>
                            React · TypeScript · Redux · SCSS · Puppeteer · html2canvas · Sentry
                        </div>
                    </div>
                </div>
                <div className={cl.startBetween}>
                    <img src={Star} alt="" />
                </div>
                <div className={cl.container_experience}>
                    <div className={cl.container_experience_description}>
                        <p className={cl.title_experience}>Primavera (ИП)<br />Frontend-разработчик</p>
                        <div className={cl.cointainer_dates_work}>
                            <p className={cl.dates_work}>Сентябрь 2023 — Ноябрь 2025</p>
                            <p className={cl.dates_work}>(2 года 3 месяца)</p>
                        </div>
                        <div className={cl.experience_description}>
                            <div>Разработка web-приложений под ключ позволила клиентам запустить онлайн-продажи и автоматизировать управление заказами без необходимости содержать собственную команду разработки.</div>
                            <div>Интернет-магазин с полноценной фильтрацией, корзиной и интеграцией с API перевёл торговлю в онлайн-канал, расширив аудиторию клиента. Административные панели с CRUD-функционалом передали управление контентом и заказами непосредственно в руки бизнеса, сократив зависимость от разработчика.</div>
                            <div>SPA-приложение на MERN-стеке с JWT-авторизацией обеспечило клиенту готовую масштабируемую платформу с пользовательским контентом и изображениями.</div>
                        </div>
                        <div className={cl.experience_stack}>
                            React · JavaScript · Node.js · MongoDB · PHP · MySQL · REST API
                        </div>
                    </div>
                </div>
                <div className={cl.startBetween}>
                    <img src={Star} alt="" />
                </div>
                <div className={cl.container_experience}>
                    <div className={cl.container_experience_description}>
                        <p className={cl.title_experience}>АО БелЗАН<br />Инженер-программист</p>
                        <div className={cl.cointainer_dates_work}>
                            <p className={cl.dates_work}>Август 2021 — Август 2022</p>
                            <p className={cl.dates_work}>(1 год)</p>
                        </div>
                        <div className={cl.experience_description}>
                            <div>Корпоративный web-сайт с административной панелью дал предприятию цифровое присутствие и возможность самостоятельно управлять контентом без привлечения разработчика на каждое изменение.</div>
                            <div>Система управления персоналом и пропусками автоматизировала учёт, поиск и фильтрацию данных о сотрудниках, заменив ручные процессы. Встроенный экспорт данных и генерация отчётов сократили время на подготовку документации для руководства.</div>
                        </div>
                        <div className={cl.experience_stack}>
                            JavaScript · HTML · CSS · PHP · MySQL
                        </div>
                    </div>
                </div>
                <div className={cl.container_education}>
                    <h1>Образование</h1>
                    <div className={cl.education_item}>
                        <p className={cl.title_experience}>СПбГУТ им. Бонч-Бруевича</p>
                        <div className={cl.cointainer_dates_work}>
                            <p className={cl.dates_work}>2022 - 2026 (Бакалавр)</p>
                        </div>
                        <p className={cl.education_spec}>ИСИТ · Интеллектуальные информационные системы</p>
                    </div>
                    <div className={cl.education_item}>
                        <p className={cl.title_experience}>Университет Иннополис</p>
                        <div className={cl.cointainer_dates_work}>
                            <p className={cl.dates_work}>2024</p>
                            <p className={cl.dates_work}>Доп. квалификация</p>
                        </div>
                        <p className={cl.education_spec}>Передовые инженерные школы · Программная инженерия</p>
                    </div>
                    <div className={cl.education_item}>
                        <p className={cl.title_experience}>ГБПОУ БГТК</p>
                        <div className={cl.cointainer_dates_work}>
                            <p className={cl.dates_work}>2018 - 2022</p>
                            <p className={cl.dates_work}>Среднее специальное</p>
                        </div>
                        <p className={cl.education_spec}>Программирование в компьютерных системах</p>
                    </div>
                    <div className={cl.education_item}>
                        <p className={cl.title_experience}>Школа Metaclass от KTS</p>
                        <div className={cl.cointainer_dates_work}>
                            <p className={cl.dates_work}>2025</p>
                            <p className={cl.dates_work}>Курс</p>
                        </div>
                        <p className={cl.education_spec}>React-разработчик</p>
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
