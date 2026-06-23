import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    
    // Check if device is touch-enabled
    if (window.matchMedia("(pointer: coarse)").matches) {
       return; 
    }

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const animate = () => {
      // Smooth follow effect for outline
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      if (outline) {
        outline.style.left = `${outlineX}px`;
        outline.style.top = `${outlineY}px`;
      }
      
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e) => {
      // Check if the target or its parent is clickable
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        getComputedStyle(target).cursor === 'pointer';

      if (isClickable) {
        document.body.classList.add('hovered');
      } else {
        document.body.classList.remove('hovered');
      }
    };
    
    // Support visual state change when actively clicking
    const handleMouseDown = () => document.body.classList.add('clicking');
    const handleMouseUp = () => document.body.classList.remove('clicking');

    // Start animation loop
    const animationId = requestAnimationFrame(animate);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
      document.body.classList.remove('hovered');
      document.body.classList.remove('clicking');
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </>
  );
};

export default Cursor;
