
import React, { useEffect, useRef } from 'react';

export const Dark3DAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createCube = () => {
      const cube = document.createElement('div');
      const size = Math.random() * 80 + 20;
      
      // Apply styles to the cube
      Object.assign(cube.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: '0',
        background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.1), rgba(30, 58, 138, 0.05))',
        borderRadius: '12px',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(139, 92, 246, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) translateZ(${Math.random() * 500 - 250}px)`,
        transformStyle: 'preserve-3d',
        animation: `float-3d-dark ${Math.random() * 15 + 15}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`,
        zIndex: '1'
      });
      
      containerRef.current?.appendChild(cube);
      
      // Animate entrance
      setTimeout(() => {
        cube.style.transition = 'opacity 1s ease-in-out';
        cube.style.opacity = '0.5';
      }, 10);
      
      // Remove after animation time to prevent too many elements
      setTimeout(() => {
        if (cube && cube.parentNode) {
          cube.style.opacity = '0';
          setTimeout(() => {
            cube.parentNode?.removeChild(cube);
          }, 1000);
        }
      }, (Math.random() * 15 + 15) * 1000);
    };
    
    // Create initial cubes
    for (let i = 0; i < 15; i++) {
      createCube();
    }
    
    // Create new cubes periodically
    const interval = setInterval(() => {
      createCube();
    }, 3000);
    
    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <>
      <div 
        ref={containerRef} 
        className="fixed inset-0 overflow-hidden perspective-1000 pointer-events-none"
      />
      <style>
        {`
        @keyframes float-3d-dark {
          0%, 100% {
            transform: rotateX(0deg) rotateY(0deg) translateZ(0px);
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) translateZ(100px);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) translateZ(50px);
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) translateZ(-50px);
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        `}
      </style>
    </>
  );
};
