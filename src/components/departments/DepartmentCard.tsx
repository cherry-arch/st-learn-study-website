import React from 'react';
import { ChevronRight } from 'lucide-react';

interface DepartmentCardProps {
  name: string;
  scheme: string;
  code: string;
  onClick: (code: string) => void;
  index: number;
}

export const DepartmentCard = ({ name, scheme, code, onClick, index }: DepartmentCardProps) => {
  return (
    <div
      onClick={() => onClick(code)}
      className="group relative bg-black/10 backdrop-blur-lg rounded-lg p-6 cursor-pointer 
                transition-all duration-500 hover:scale-105 hover:rotate-y-10
                border border-purple-500/20 hover:border-purple-500/50
                animate-fade-up hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
      style={{
        animationDelay: `${index * 100}ms`,
        transform: "translateZ(0)",
      }}
    >
      <div className="relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
              {name}
            </h2>
            <p className="text-sm text-purple-200/70 group-hover:text-purple-200 transition-colors">
              {scheme}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-all duration-300 transform group-hover:translate-x-1" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl" />
    </div>
  );
};