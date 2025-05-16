
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UnitsList } from "./UnitsList";
import { SubjectHeader } from "./SubjectHeader";
import { useNavigate } from "react-router-dom";
import {
  semester1Subjects,
  semester2Subjects,
  semester3Subjects,
  semester4Subjects,
  semester5Subjects,
  semester6Subjects,
  eee1Subjects,
  eee2Subjects,
  eee3Subjects,
  eee4Subjects,
  civilSem2Subjects,
  civilSem3Subjects,
  civilSem4Subjects,
  civilSem5Subjects,
  civilSem6Subjects,
  mechSem2Subjects,
  mechSem3Subjects,
  mechSem4Subjects,
  mechSem5Subjects,
  mechSem6Subjects,
  cse1Subjects,
  cse2Subjects,
  cse3Subjects,
  cse4Subjects,
  cse5Subjects,
  cse6Subjects,
  csbs1Subjects,
  csbs2Subjects,
  csbs3Subjects,
  csbs4Subjects,
  csbs5Subjects,
  csbs6Subjects,
  csds1Subjects,
  csds2Subjects,
  csds3Subjects,
  csds4Subjects,
  csds5Subjects,
  csds6Subjects,
  csai1Subjects,
  csai2Subjects,
  csai3Subjects,
  csai4Subjects,
  csai5Subjects,
  csai6Subjects,
} from "../data/subjectsData";

interface SubjectsListProps {
  departmentCode: string;
  semesterNumber: number;
}

export const SubjectsList = ({ departmentCode, semesterNumber }: SubjectsListProps) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [showUnits, setShowUnits] = useState(false);
  const navigate = useNavigate();

  const getSubjects = () => {
    // First semester handling
    if (semesterNumber === 1) {
      if (departmentCode === "CSE") return cse1Subjects;
      if (departmentCode === "EEE") return eee1Subjects;
      if (departmentCode === "CSBS") return csbs1Subjects;
      if (departmentCode === "CSDS") return csds1Subjects;
      if (departmentCode === "CSAI") return csai1Subjects;
      // Default for other departments
      return semester1Subjects;
    }
    
    // Second semester handling - make sure each department gets its own subjects
    if (semesterNumber === 2) {
      if (departmentCode === "CSE") return cse2Subjects;
      if (departmentCode === "EEE") return eee2Subjects;
      if (departmentCode === "CSBS") return csbs2Subjects;
      if (departmentCode === "CSDS") return csds2Subjects;
      if (departmentCode === "CSAI") return csai2Subjects;
      if (departmentCode === "CIVIL") return civilSem2Subjects;
      if (departmentCode === "MECH") return mechSem2Subjects;
      // Default for ECE
      return semester2Subjects;
    }

    // Handle other semesters based on department
    if (departmentCode === "CIVIL") {
      if (semesterNumber === 3) return civilSem3Subjects;
      if (semesterNumber === 4) return civilSem4Subjects;
      if (semesterNumber === 5) return civilSem5Subjects;
      if (semesterNumber === 6) return civilSem6Subjects;
    }
    if (departmentCode === "MECH") {
      if (semesterNumber === 3) return mechSem3Subjects;
      if (semesterNumber === 4) return mechSem4Subjects;
      if (semesterNumber === 5) return mechSem5Subjects;
      if (semesterNumber === 6) return mechSem6Subjects;
    }
    if (departmentCode === "ECE") {
      if (semesterNumber === 3) return semester3Subjects;
      if (semesterNumber === 4) return semester4Subjects;
      if (semesterNumber === 5) return semester5Subjects;
      if (semesterNumber === 6) return semester6Subjects;
    }
    if (departmentCode === "EEE") {
      if (semesterNumber === 3) return eee3Subjects;
      if (semesterNumber === 4) return eee4Subjects;
    }
    if (departmentCode === "CSE") {
      if (semesterNumber === 3) return cse3Subjects;
      if (semesterNumber === 4) return cse4Subjects;
      if (semesterNumber === 5) return cse5Subjects;
      if (semesterNumber === 6) return cse6Subjects;
    }
    if (departmentCode === "CSBS") {
      if (semesterNumber === 3) return csbs3Subjects;
      if (semesterNumber === 4) return csbs4Subjects;
      if (semesterNumber === 5) return csbs5Subjects;
      if (semesterNumber === 6) return csbs6Subjects;
    }
    if (departmentCode === "CSDS") {
      if (semesterNumber === 3) return csds3Subjects;
      if (semesterNumber === 4) return csds4Subjects;
      if (semesterNumber === 5) return csds5Subjects;
      if (semesterNumber === 6) return csds6Subjects;
    }
    if (departmentCode === "CSAI") {
      if (semesterNumber === 3) return csai3Subjects;
      if (semesterNumber === 4) return csai4Subjects;
      if (semesterNumber === 5) return csai5Subjects;
      if (semesterNumber === 6) return csai6Subjects;
    }
    
    return [{ id: "unavailable", name: "Notes", units: ["Notes will be available soon"] }];
  };

  const handleClose = () => {
    if (showUnits) {
      setSelectedSubject(null);
      setShowUnits(false);
    } else {
      navigate(-1);
    }
  };

  const handleBack = () => {
    setSelectedSubject(null);
    setShowUnits(false);
  };

  if (showUnits && selectedSubject) {
    const subject = getSubjects().find(s => s.id === selectedSubject);
    return (
      <div className="space-y-4">
        <SubjectHeader
          title={subject?.name || ""}
          onBack={handleBack}
          onClose={handleClose}
          showBack={true}
        />
        <UnitsList units={subject?.units || []} />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <SubjectHeader 
        title="Subjects" 
        onClose={handleClose} 
        showBack={false}
      />
      <ScrollArea className="h-[400px] w-full rounded-md border border-white/10 p-4">
        <div className="grid gap-4">
          {getSubjects().map((subject) => (
            <div
              key={subject.id}
              onClick={() => {
                setSelectedSubject(subject.id);
                setShowUnits(true);
              }}
              className="p-4 rounded-lg bg-black/30 backdrop-blur-lg
                       border border-white/20 hover:border-white/40
                       text-white cursor-pointer"
            >
              {subject.name}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
