import { useState, useEffect } from 'react';

function useMouseParallax(speed = 0.05) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = -(event.clientX - innerWidth / 2) * speed; // Инвертируем направление
      const y = -(event.clientY - innerHeight / 2) * speed;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [speed]);

  return offset;
}

export default useMouseParallax;
