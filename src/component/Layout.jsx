import { useState, useEffect, useCallback } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MyFace from '../image/MyFace.png';
import cl from '../App.module.scss';
import MainMenu from '../widgers/MainMenu';

function Layout() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = (e) => {
        e.stopPropagation();
        setShowMenu((prev) => !prev);
    };

    const closeMenu = useCallback((e) => {
        if (!e.target.closest('[data-menu]')) setShowMenu(false);
    }, []);

    useEffect(() => {
        if (showMenu) document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu, closeMenu]);

    return (
        <>
            <header>
                <MainMenu show={showMenu} onClose={() => setShowMenu(false)} />
                <div className={cl.header}>
                    <Link to="/">
                        <div className={cl.header_logo}>
                            <img src={MyFace} className={cl.header_logo_img} alt="MyFace" />
                            <div className={cl.header_logo_text}>VD</div>
                        </div>
                    </Link>
                </div>
                <div
                    className={`${cl.header_menu} ${showMenu ? cl.header_menu_open : ''}`}
                    onClick={handleMenu}
                    data-menu="trigger"
                    aria-label="Открыть меню"
                >
                    <div className={cl.header_menu_pointMenu} />
                    <div className={cl.header_menu_pointMenu} />
                    <div className={cl.header_menu_pointMenu} />
                </div>
            </header>
            <Outlet />
        </>
    );
}

export { Layout };