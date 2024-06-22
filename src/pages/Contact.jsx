import React from 'react'
import iconT from '../image/iconT.png';
import iconG from '../image/iconG.png';
import MyFaceBig from '../image/MyFacePhone.png';
import cl from './Contact.module.scss';
function Contact() {
    return (
        <>
            <div className={cl.container}>
                <h1>Контакты</h1>
                <div className={cl.container_myFace}><img src={MyFaceBig} alt="" /></div>
                <div className={cl.container_form}>
                    <div className={cl.block_form}>
                        <p>Связь со мной</p>
                        <hr />
                        <form action="" method="post">
                            <input type="text" name="name" id="name" placeholder='Ваше имя' />
                            <input type="email" name="email" id="email" placeholder='Ваш Email' />
                            <textarea name="message" id="message" placeholder='Ваше обращение ко мне'></textarea>
                            <button type="submit">Отправить</button>
                        </form>
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

export { Contact }