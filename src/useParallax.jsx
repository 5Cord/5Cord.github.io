import { useState, useEffect } from 'react';

function useParallax(speed = 0.05) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = -(event.clientX - innerWidth / 2) * speed;
      const y = -(event.clientY - innerHeight / 2) * speed;
      setOffset({ x, y });
    };

    const handleDeviceOrientation = (event) => {
      const x = event.gamma * speed; // горизонтальный наклон устройства
      const y = event.beta * speed;  // вертикальный наклон устройства
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleDeviceOrientation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [speed]);

  return offset;
}

export default useParallax;
