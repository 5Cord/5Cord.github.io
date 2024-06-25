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
                <div className={cl.MainMenu_point}><Link to="/contact">Контакты</Link></div>
                <div className={cl.MainMenu_point}><Link to="https://github.com/5Cord" target='_blank'>Github</Link></div>
                <div className={cl.MainMenu_point}><Link to="https://spb.hh.ru/resume/82be0f0bff09e0050f0039ed1f37566f53696d?disableBrowserCache=true&hhtmFrom=resume_list" target='_blank'>Резюме</Link></div>
            </div>
        </>
    );
}

export default MainMenu;
