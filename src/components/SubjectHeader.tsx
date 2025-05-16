
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, X } from "lucide-react";

interface SubjectHeaderProps {
  title: string;
  onBack?: () => void;
  onClose: () => void;
  showBack?: boolean;
}

export const SubjectHeader = ({ title, onBack, onClose, showBack }: SubjectHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      {showBack && (
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Subjects
        </Button>
      )}
      {!showBack && (
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      )}
      <Button
        onClick={onClose}
        variant="ghost"
        className="text-white hover:bg-white/10 transition-colors"
      >
        <X className="w-5 h-5" />
      </Button>
    </div>
  );
};
