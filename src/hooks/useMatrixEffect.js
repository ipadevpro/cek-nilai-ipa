import { useEffect, useRef } from 'react';

const useMatrixEffect = (containerRef) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Store a reference to the current container element
    const currentContainer = containerRef.current;
    
    const canvas = document.createElement('canvas');
    canvasRef.current = canvas;
    currentContainer.appendChild(canvas);
    
    canvas.width = currentContainer.offsetWidth;
    canvas.height = currentContainer.offsetHeight;
    
    const ctx = canvas.getContext('2d');
    const chars = '10'.split('');
    const columns = canvas.width / 15;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / 15);
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#7F5AF0';
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 15, drops[i] * 15);
        
        if (drops[i] * 15 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
      
      animationRef.current = requestAnimationFrame(draw);
    };
    
    draw();
    
    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Use the stored reference instead of containerRef.current
      if (canvasRef.current && currentContainer) {
        try {
          currentContainer.removeChild(canvasRef.current);
        } catch (e) {
          console.warn('Error removing canvas:', e);
        }
      }
    };
  }, [containerRef]);
  
  return canvasRef;
};

export default useMatrixEffect; 