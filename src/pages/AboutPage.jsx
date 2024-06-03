import React from 'react'
import iconT from '../image/iconT.png';
import iconG from '../image/iconG.png';
import MyFaceBig from '../image/bigFace.png';
import cl from './AboutStyle.module.scss';
function About() {
    return (
        <>
            <div className={cl.container}>
                <h1>Привет! Я молодой <br></br>
                    Frontend developer</h1>
                <div className={cl.container_myFace}><img src={MyFaceBig} alt="" /></div>
                <div className={cl.container_tecnology}>
                    <h1 className={cl.h1_indent100}>Стэк технологий</h1>
                    <div className={cl.container_stack}>
                        <div className={cl.point_stack}>HTML</div>
                        <div className={cl.point_stack}>SCSS</div>
                        <div className={cl.point_stack}>Vite</div>
                        <div className={cl.point_stack}>BEM</div>
                        <div className={cl.point_stack}>MySQL</div>
                        <div className={cl.point_stack}>JS</div>
                        <div className={cl.point_stack}>React</div>
                        <div className={cl.point_stack}>Node js</div>
                        <div className={cl.point_stack}>PHP</div>
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