import React from 'react';
import cl from './MenuStyle.module.scss';

function MainMenu({ show }) { // Получаем пропс show
    return (
        <div className={`${cl.MainMenu} ${show ? cl.MainMenu_open : ''}`}>
            <div className={cl.MainMenu_title}>Меню</div>
            <div className={cl.MainMenu_point}>Обо мне</div>
            <div className={cl.MainMenu_point}>Контакты</div>
            <div className={cl.MainMenu_point}>GitHub</div>
            <div className={cl.MainMenu_point}>Резюме</div>
        </div>
    );
}

export default MainMenu;
