
import React from "react";

interface Unit {
  name: string;
  link?: string;
}

interface UnitsListProps {
  units: (Unit | string)[];
}

export const UnitsList = ({ units }: UnitsListProps) => {
  return (
    <div className="grid gap-4">
      {units.map((unit, index) => {
        const isUnitObject = typeof unit !== 'string';
        
        return (
          <div
            key={index}
            className="p-4 rounded-lg bg-white/10 backdrop-blur-lg
                     border border-white/20 hover:border-white/40
                     text-white"
          >
            {isUnitObject ? (
              <a 
                href={unit.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                {unit.name}
              </a>
            ) : (
              unit
            )}
          </div>
        );
      })}
    </div>
  );
};
