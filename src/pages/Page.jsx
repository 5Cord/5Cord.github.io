import React, { useEffect, useState } from 'react'
import Logo from '../image/Belzan.png';
import Preview from '../image/Primavera.png';
import MyFace2 from '../image/MyFace2.png';
import Gallery1 from '../image/Gallery.png';
// import Gallery2 from '../image/Gallery2.png';
// import Gallery3 from '../image/Gallery3.png';
import iconT from '../image/iconT.png';
import iconG from '../image/iconG.png';
import Shadow from '../image/shadow.svg';
import cl from './PageStyle.module.scss';
import { useParams } from 'react-router-dom';
function Page() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [stackData, setStackData] = useState([]);

    useEffect(() => {
        console.log(import.meta.env.VITE_API_URL);

        fetch(`${import.meta.env.VITE_API_URL}/project/${id}`)
            .then(response => {
                if (!response.ok) {
                    // Если ответ не в порядке, выводим статус
                    console.error('Ошибка сети:', response.status, response.statusText);
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProduct(data);
                const stackArray = data.stack.split(',').map(item => item.trim());
                setStackData(stackArray);
            })
            .catch(error => console.error('Ошибка при получении данных о продукте:', error));
    }, [id]); 

    return (
        <>
            <div className={cl.container}>
                <h1>{product.title}</h1>
                <div className={cl.descriptrion_container}>
                    <div className={cl.descriptrion_logo}><img src={product.miniI} alt="" /></div>
                    <div className={cl.descriptrion_text}>{product.descriptrion}</div>
                </div>
                <div className={cl.preview}>
                    <img src={product.pcImg} alt="" />
                </div>
                <div className={cl.container_tecnology}>
                    <div className={cl.background_shadow}><img src={Shadow} alt="" /></div>
                    <h1 className={cl.h1_indent100}>Технологии</h1>
                    <div className={cl.container_stack}>
                        {stackData.map((item, index) => (
                            <div key={index} className={cl.point_stack}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className={cl.h1_indent100}>Подход</h1>
                <div className={cl.approach_container}>
                    <div className={cl.approach_myface}><img src={MyFace2} alt="" /></div>
                    <div className={cl.approach_text}>{product.approach}</div>
                </div>
                <div className={cl.blockMobile}>
                </div>
                <div className={cl.gallery}>
                    <img src={Gallery1} alt="" />
                    {/* <img src={Gallery2} alt="" />
                <img src={Gallery3} alt="" /> */}
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

export { Page }