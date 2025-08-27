import React, { useRef, useEffect } from 'react';
import './StarfieldBackground.css';

// Configurable starfield layers
const LAYERS = [
  { count: 60, speed: 0.08, size: [1, 2], color: 'rgba(120,180,255,0.7)' }, // far
  { count: 40, speed: 0.18, size: [1.5, 2.5], color: 'rgba(255,180,120,0.8)' }, // mid
  { count: 20, speed: 0.32, size: [2, 3.5], color: 'rgba(255,80,180,0.9)' }, // near
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const StarfieldBackground = () => {
  const canvasRef = useRef();
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    // Generate stars for each layer
    starsRef.current = LAYERS.flatMap(layer =>
      Array.from({ length: layer.count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: randomBetween(layer.size[0], layer.size[1]),
        speed: layer.speed,
        color: layer.color,
        twinkle: Math.random() * Math.PI * 2,
      }))
    );

    function animate() {
      ctx.clearRect(0, 0, width, height);
      let i = 0;
      for (const layer of LAYERS) {
        for (let j = 0; j < layer.count; j++, i++) {
          const star = starsRef.current[i];
          // Twinkle
          const tw = 0.7 + 0.3 * Math.sin(Date.now() * 0.001 + star.twinkle);
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r * tw, 0, 2 * Math.PI);
          ctx.fillStyle = star.color;
          ctx.shadowColor = star.color;
          ctx.shadowBlur = 8 * tw;
          ctx.globalAlpha = 0.7 + 0.3 * tw;
          ctx.fill();
          ctx.globalAlpha = 1;
          ctx.shadowBlur = 0;
          // Move
          star.y += star.speed;
          if (star.y > height + 8) {
            star.x = Math.random() * width;
            star.y = -8;
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="starfield-bg-canvas"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
};

export default StarfieldBackground;
