import React from 'react'
import Logo from '../image/Belzan.png';
import Preview from '../image/Primavera.png';
import MyFace2 from '../image/MyFace2.png';
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
            <h1 className={cl.h1_indent100}>Технологии</h1>
            <div className={cl.container_stack}>
                <div className={cl.point_stack}>HTML</div>
                <div className={cl.point_stack}>SASS</div>
                <div className={cl.point_stack}>PHP</div>
                <div className={cl.point_stack}>MySQL</div>
                <div className={cl.point_stack}>JS</div>
            </div>
            <h1 className={cl.h1_indent100}>Подход</h1>
            <div className={cl.approach_container}>
                <div className={cl.approach_myface}><img src={MyFace2} alt="" /></div>
                <div className={cl.approach_text}>Mountaire Farms turned to Lounge Lizard to design and build a new website and brand communication strategy that resonated with specific use case personas, and positioned the company with integrity and transparency.
                    Lounge Lizard developed the messaging strategies and visual design and developed the website with modern responsive programming techniques.</div>
            </div>
        </div>
    )
}

export { Page }