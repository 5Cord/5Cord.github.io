import React from 'react'
import Logo from '../image/Belzan.png';
import Preview from '../image/Primavera.png';
import cl from './PageStyle.module.scss';
function Page() {
    return (
        <div className={cl.container}>
            <h1>Сайт предприятия БелЗАН</h1>
            <div className={cl.descriptrion_container}>
                <div className={cl.descriptrion_logo}><img src={Logo} alt="" /></div>
                <div className={cl.descriptrion_text}>Mountaire Farms is a fast growing agricultural food processing company with almost
                    10,000 employees at their facilities in Arkansas, Delaware, Maryland, Virginia, and North Carolina.</div>
            </div>
            <div className={cl.preview}>
                <img src={Preview} alt="" />
            </div>
            <h1>Технологии</h1>
        </div>
    )
}

export { Page }