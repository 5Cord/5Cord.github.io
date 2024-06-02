import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MyFace from '../image/MyFace.png';
import cl from '../App.module.scss';
import MainMenu from '../widgers/MainMenu';

function Layout() {
    const [showMenu, setShowMenu] = useState(false);
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
            <header>
                <MainMenu show={showMenu} />
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
            </header>
            <Outlet />
        </>
    )
}

export { Layout }
