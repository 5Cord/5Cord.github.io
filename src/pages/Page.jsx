import { useEffect, useState } from 'react';
import iconT from '../image/iconT.png';
import iconG from '../image/iconG.png';
import Shadow from '../image/shadow.svg';
import Arrow from '../image/Arrow.svg';
import cl from './PageStyle.module.scss';
import { useParams, useNavigate } from 'react-router-dom';

function Page() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [stackData, setStackData] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/project/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data) => {
                setProduct(data);
                setStackData(data.stack.split(',').map((s) => s.trim()));
            })
            .catch((err) => console.error('Ошибка загрузки проекта:', err));
    }, [id]);

    if (!product) {
        return <div className={cl.loading}>Загрузка...</div>;
    }

    return (
        <>
            <button className={cl.backButton} onClick={() => navigate('/')}>
                <img src={Arrow} className={cl.backArrow} alt="Назад" />
                <span>Проекты</span>
            </button>
            <div className={cl.container}>
                <h1>{product.title}</h1>

                <div className={cl.link}>
                    <a className={cl.link_anchor} target="_blank" rel="noreferrer" href={product.link}>
                        Ссылка на проект ↗
                    </a>
                </div>

                <div className={cl.descriptrion_container}>
                    <div className={cl.descriptrion_logo}>
                        <img src={product.miniI} alt="icon" />
                    </div>
                    <div className={cl.descriptrion_text}>
                        {product.descriptrion}.{' '}
                        <a target="_blank" rel="noreferrer" href={product.link}>
                            Ссылка на проект
                        </a>
                    </div>
                </div>

                <div className={cl.preview}>
                    <img src={product.pcImg} alt={product.title} />
                </div>

                <div className={cl.container_tecnology}>
                    <div className={cl.background_shadow}>
                        <img src={Shadow} alt="" />
                    </div>
                    <h1>Технологии</h1>
                    <div className={cl.container_stack}>
                        {stackData.map((item, i) => (
                            <div key={i} className={cl.point_stack}>{item}</div>
                        ))}
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

export { Page };