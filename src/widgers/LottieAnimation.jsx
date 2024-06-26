import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../image/Animation.json';
import cl from './Animate.module.scss';

const LottieAnimation = () => {
    return (
        <div className={cl.animation}>
            <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div>
    );
};

export default LottieAnimation;
