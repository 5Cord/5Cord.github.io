import React, { useState } from 'react';
import iconT from '../image/iconT.png';
import iconG from '../image/iconG.png';
import MyFaceBig from '../image/MyFacePhone.png';
import cl from './Contact.module.scss';
import axios from 'axios';

function Contact() {
    const [nameUser, setNameUser] = useState('');
    const [emailUser, seteMailUser] = useState('');
    const [messageUser, setMessageUser] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newPost = { nameUser, emailUser, messageUser };
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/feedback`, newPost);
            console.log('Form sends:', response.data);
            alert('Сообщение успешно отправлено!');
            setNameUser('');
            seteMailUser('');  // Убедитесь, что функция названа правильно, должно быть setEmailUser
            setMessageUser('');
        } catch (error) {
            if (error.response && error.response.data) {
                const validationErrors = error.response.data.map(err => err.msg).join('\n');
                alert(`Ошибка отправки формы:\n${validationErrors}`);
            } else {
                console.error('Error sends:', error);
                alert('Ошибка отправки формы');
            }
        }
    };
    

    return (
        <>
            <div className={cl.container}>
                <h1>Контакты</h1>
                <div className={cl.container_myFace}><img src={MyFaceBig} alt="" /></div>
                <div className={cl.container_form}>
                    <div className={cl.block_form}>
                        <p>Связь со мной</p>
                        <hr />
                        <form onSubmit={handleSubmit} >
                            <input type="text" value={nameUser}
                                onChange={(e) => setNameUser(e.target.value)} placeholder='Ваше имя' />
                            <input type="email" name="email" id="email" value={emailUser}
                                onChange={(e) => seteMailUser(e.target.value)} placeholder='Ваш Email' />
                            <textarea name="message" id="message" value={messageUser}
                                onChange={(e) => setMessageUser(e.target.value)} placeholder='Ваше обращение ко мне'></textarea>
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

export { Contact };
