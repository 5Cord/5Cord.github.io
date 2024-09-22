import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MyFace from '../image/MyFace.png';
import cl from '../App.module.scss';
import MainMenu from '../widgers/MainMenu';

function Layout() {
    const [showMenu, setShowMenu] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMenu = (event) => {
        event.stopPropagation();
        if (!showMenu) {
            setIsAnimating(true);
            setShowMenu(true);
        } else {
            setIsAnimating(true);
        }
    };

    useEffect(() => {
        const closeMenu = (e) => {
            if (showMenu && !e.target.closest('.MainMenu')) {
                setIsAnimating(true);
                setShowMenu(false);
            }
        };

        document.addEventListener('click', closeMenu);
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [showMenu]);

    const handleAnimationEnd = () => {
        if (!showMenu) {
            setIsAnimating(false);
        }
    };

    return (
        <>
            <header>
                {(showMenu || isAnimating) && (
                    <MainMenu show={showMenu} onAnimationEnd={handleAnimationEnd} />
                )}
                <div className={cl.header}>
                    <Link to="/about">
                        <div className={cl.header_logo}>
                            <img src={MyFace} className={cl.header_logo_img} alt="MyFace" />
                            <div className={cl.header_logo_text}>VD</div>
                        </div>
                    </Link>
                </div>
                <div className={cl.header_menu} onClick={handleMenu}>
                    <div className={cl.header_menu_pointMenu}></div>
                    <div className={cl.header_menu_pointMenu}></div>
                    <div className={cl.header_menu_pointMenu}></div>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export { Layout };
