import { useCallback } from 'react';

const useSparkle = () => {
  const createSparkle = useCallback((e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    document.body.appendChild(sparkle);
    
    // If no event is provided or it doesn't have pageX/pageY, use center of viewport
    const x = e?.pageX || window.innerWidth / 2;
    const y = e?.pageY || window.innerHeight / 2;
    
    // Position the sparkle
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    
    // Remove after animation completes
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }, []);

  return { createSparkle };
};

export default useSparkle; 