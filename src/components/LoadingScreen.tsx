
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const timer = setTimeout(() => {
      setProgress(100);
    }, 1000);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 transition-opacity duration-500">
      <div className="relative mb-8">
        {/* Animated Text */}
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          BrightLearn
        </h2>
        
        {/* Animated Orbit Elements */}
        <div className="absolute inset-0 -z-10">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className="absolute inset-0 border-2 rounded-full opacity-20 border-purple-500"
              style={{
                animation: `spin ${6 + i * 3}s linear infinite`,
                width: `${120 + i * 40}%`,
                height: `${120 + i * 40}%`,
                top: `${-10 - i * 20}%`,
                left: `${-10 - i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }} 
        />
      </div>
      
      {/* Dots */}
      <div className="mt-4 flex gap-2">
        <div className={`w-2 h-2 rounded-full ${progress > 30 ? 'bg-pink-500' : 'bg-gray-500'} animate-pulse`} style={{ animationDelay: '0ms' }} />
        <div className={`w-2 h-2 rounded-full ${progress > 50 ? 'bg-pink-500' : 'bg-gray-500'} animate-pulse`} style={{ animationDelay: '200ms' }} />
        <div className={`w-2 h-2 rounded-full ${progress > 70 ? 'bg-pink-500' : 'bg-gray-500'} animate-pulse`} style={{ animationDelay: '400ms' }} />
      </div>
      
      {/* Glowing Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-3 h-3 rounded-full bg-purple-500/30 animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Moving the keyframe animations to a regular style tag without the 'jsx' attribute */}
      <style>
        {`
          @keyframes spin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};
