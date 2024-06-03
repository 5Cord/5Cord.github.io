import React from 'react'
import iconT from '../image/iconT.png';
import iconG from '../image/iconG.png';
import Shadow from '../image/shadow.svg';
import cl from './PageStyle.module.scss';
function About() {
    return (
        <>
            <div className={cl.container}>
            <h1>Привет! Я молодой</h1>
            <h1>Frontend developer</h1>
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