import React from 'react';

export const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float"
            style={{
              width: Math.random() * 300 + 50 + "px",
              height: Math.random() * 300 + 50 + "px",
              background: `radial-gradient(circle at center, 
                ${['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'][Math.floor(Math.random() * 4)]}, 
                transparent)`,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              filter: "blur(60px)",
              opacity: 0.3,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
            }}
          />
        ))}
      </div>
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg);
            }
            25% {
              transform: translate(50px, 50px) rotate(90deg);
            }
            50% {
              transform: translate(0, 100px) rotate(180deg);
            }
            75% {
              transform: translate(-50px, 50px) rotate(270deg);
            }
          }
        `}
      </style>
    </div>
  );
};