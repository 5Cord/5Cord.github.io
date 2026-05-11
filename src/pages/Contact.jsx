import iconT from '../image/iconT.png';
import iconG from '../image/iconG.png';
import MyFaceBig from '../image/MyFacePhone.png';
import cl from './Contact.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Contact() {
    const [form, setForm] = useState({ nameUser: '', emailUser: '', messageUser: '' });
    const [status, setStatus] = useState(null);

    useEffect(() => {
        if (status !== 'success') return;
        const timer = setTimeout(() => setStatus(null), 5000);
        return () => clearTimeout(timer);
    }, [status]);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/feedback`, { ...form, sentAt: new Date().toISOString() });
            setStatus('success');
            setForm({ nameUser: '', emailUser: '', messageUser: '' });
        } catch (error) {
            const msgs = error.response?.data?.map((err) => err.msg).join('\n');
            setStatus(msgs || 'error');
        }
    };

    return (
        <>
            {status === 'success' && (
                <div className={cl.toast_success}>
                    Сообщение отправлено — свяжусь с вами в ближайшее время ✓
                </div>
            )}
            <div className={cl.container}>
                <h1>Контакты</h1>
                <div className={cl.container_myFace}>
                    <img src={MyFaceBig} alt="Фото" />
                </div>
                <div className={cl.container_form}>
                    <div className={cl.block_form}>
                        <p>Связь со мной</p>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="nameUser"
                                value={form.nameUser}
                                onChange={handleChange}
                                placeholder="Ваше имя"
                                required
                            />
                            <input
                                type="email"
                                name="emailUser"
                                value={form.emailUser}
                                onChange={handleChange}
                                placeholder="Ваш Email"
                                required
                            />
                            <textarea
                                name="messageUser"
                                value={form.messageUser}
                                onChange={handleChange}
                                placeholder="Ваше обращение ко мне"
                                required
                            />
                            <button type="submit">Отправить</button>
                            {status && status !== 'success' && (
                                <span className={cl.msg_error}>Ошибка: {status}</span>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <div className={cl.footer_text}>Frontend-developer</div>
                <a target="_blank" rel="noreferrer" href="https://t.me/vaydmitry">
                    <img src={iconT} alt="Telegram" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/5Cord">
                    <img src={iconG} alt="GitHub" />
                </a>
            </footer>
        </>
    );
}

export { Contact };
