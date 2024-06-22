import React from 'react';
import cl from './MenuStyle.module.scss';
import { Route, Routes, Link } from "react-router-dom"
import { About } from '../pages/AboutPage';

function MainMenu({ show }) { // Получаем пропс show
    return (
        <>
            <div className={`${cl.MainMenu} ${show ? cl.MainMenu_open : ''}`}>
                <div className={cl.MainMenu_title}>Меню</div>
                <div className={cl.MainMenu_point}><Link to="/about">Обо мне</Link></div>
                <div className={cl.MainMenu_point}>Контакты</div>
                <div className={cl.MainMenu_point}>GitHub</div>
                <div className={cl.MainMenu_point}>Резюме</div>
            </div>
        </>
    );
}

export default MainMenu;
