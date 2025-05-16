import React from 'react';

export const Background3DAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: Math.random() * 100 + 50 + "px",
            height: Math.random() * 100 + 50 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animation: `float-3d ${Math.random() * 10 + 10}s linear infinite`,
            transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`,
          }}
        >
          <div className="w-full h-full relative transform-style-3d">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg backdrop-blur-lg border border-white/10" />
          </div>
        </div>
      ))}
      <style>
        {`
          @keyframes float-3d {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg);
            }
            25% {
              transform: translate3d(50px, 50px, 100px) rotateX(90deg) rotateY(90deg);
            }
            50% {
              transform: translate3d(0, 100px, 0) rotateX(180deg) rotateY(180deg);
            }
            75% {
              transform: translate3d(-50px, 50px, -100px) rotateX(270deg) rotateY(270deg);
            }
          }

          .transform-style-3d {
            transform-style: preserve-3d;
          }
        `}
      </style>
    </div>
  );
};