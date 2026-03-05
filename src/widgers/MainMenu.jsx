import cl from './MenuStyle.module.scss';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
    { label: 'Проекты',  to: '/' },
    { label: 'Обо мне',  to: '/about' },
    { label: 'Контакты', to: '/contact' },
    { label: 'Github',   to: 'https://github.com/5Cord', external: true },
    { label: 'Резюме',   to: 'https://spb.hh.ru/resume/82be0f0bff09e0050f0039ed1f37566f53696d', external: true },
];

function MainMenu({ show, onClose }) {
    return (
        <div
            className={`${cl.MainMenu} ${show ? cl.MainMenu_open : ''}`}
            data-menu="panel"
            aria-hidden={!show}
        >
            <div className={cl.MainMenu_title}>Меню</div>
            <nav>
                {NAV_LINKS.map(({ label, to, external }) => (
                    <div key={label} className={cl.MainMenu_point} onClick={onClose}>
                        {external ? (
                            <a href={to} target="_blank" rel="noreferrer">{label}</a>
                        ) : (
                            <Link to={to}>{label}</Link>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default MainMenu;