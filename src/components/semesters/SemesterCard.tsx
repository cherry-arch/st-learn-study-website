
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SubjectsList } from '../SubjectsList';

interface SemesterCardProps {
  number: number;
  departmentCode: string;
  megaLink: string | null;
  onClick: (megaLink: string | null) => void;
  index: number;
}

export const SemesterCard = ({ number, departmentCode, megaLink, onClick, index }: SemesterCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="group relative bg-black/30 backdrop-blur-lg rounded-lg p-6 cursor-pointer
                   transition-all duration-500 hover:scale-105 hover:rotate-y-10
                   border border-purple-500/20 hover:border-purple-500/50
                   animate-fade-up"
          style={{
            animationDelay: `${index * 100}ms`,
            transform: "translateZ(0)",
          }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Semester {number}
            </h2>
            <p className="text-sm mt-2">
              <span className="text-white font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Click to access materials
              </span>
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/20 to-[#e11d48]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur-xl" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-gray-900 to-black border-purple-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Semester {number} Subjects
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <SubjectsList departmentCode={departmentCode} semesterNumber={number} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
