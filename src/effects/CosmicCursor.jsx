import React, { useEffect, useRef } from 'react';
import './CosmicCursor.css';

const CosmicCursor = () => {
  const cursorRef = useRef();
  const lightRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;
    const light = lightRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    function move(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      light.style.left = `${mouseX - 120}px`;
      light.style.top = `${mouseY - 120}px`;
    }
    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={lightRef} className="cosmic-cursor-light" />
      <div ref={cursorRef} className="cosmic-cursor" />
    </>
  );
};

export default CosmicCursor;
