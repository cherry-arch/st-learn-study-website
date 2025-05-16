
import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { SearchBot } from "@/components/SearchBot";
import { Background3DAnimation } from "./semesters/Background3DAnimation";
import { SemesterCard } from "./semesters/SemesterCard";
import { SubjectsList } from "./SubjectsList";

export const SemesterSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { departmentCode } = useParams();
  const { toast } = useToast();
  const hasShownToast = React.useRef(false);
  const [selectedSemester, setSelectedSemester] = React.useState<number | null>(null);

  // Extract semester number from URL if present
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const semester = params.get("semester");
    if (semester) {
      setSelectedSemester(parseInt(semester, 10));
    }
  }, [location]);

  const handleSemesterClick = (semesterNumber: number) => {
    // For semester 1 and 2, we can show subjects for all departments
    if (semesterNumber <= 2) {
      setSelectedSemester(semesterNumber);
      // Update URL with semester parameter
      navigate(`/semester/${departmentCode}?semester=${semesterNumber}`, { replace: true });
    } else if (departmentCode === "ECE" || departmentCode === "CSAI" && (semesterNumber === 3 || semesterNumber === 4 || semesterNumber === 5 || semesterNumber === 6)) {
      setSelectedSemester(semesterNumber);
      navigate(`/semester/${departmentCode}?semester=${semesterNumber}`, { replace: true });
    } else {
      if (!hasShownToast.current) {
        toast({
          title: "Not Available",
          description: "Units coming soon for this department.",
          variant: "destructive",
          className: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white border-none",
        });
        hasShownToast.current = true;
      }
    }
  };

  const handleBack = () => {
    if (selectedSemester) {
      setSelectedSemester(null);
      navigate(`/semester/${departmentCode}`, { replace: true });
    } else {
      navigate("/get-started");
    }
  };

  const semesterNumbers = Array.from({ length: 6 }, (_, i) => i + 1);

  // If a semester is selected, show the subjects list
  if (selectedSemester && departmentCode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 pt-0">
        <Background3DAnimation />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="mb-8 text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Semesters
          </Button>
          
          <h1 className="text-4xl font-bold text-center mb-8 text-white bg-clip-text">
            {departmentCode} - Semester {selectedSemester}
          </h1>
          
          <SubjectsList 
            departmentCode={departmentCode} 
            semesterNumber={selectedSemester} 
          />
        </div>
        <SearchBot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 pt-0">
      <Background3DAnimation />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Button
          onClick={handleBack}
          variant="ghost"
          className="mb-8 text-white hover:bg-white/10"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Departments
        </Button>

        <h1 className="text-4xl font-bold text-center mb-8 text-white bg-clip-text animate-pulse">
          {departmentCode || 'Department'} - Semesters
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {semesterNumbers.map((number, index) => (
            <SemesterCard
              key={number}
              number={number}
              departmentCode={departmentCode || ""}
              megaLink={null}
              onClick={() => handleSemesterClick(number)}
              index={index}
            />
          ))}
        </div>
      </div>
      <SearchBot />
    </div>
  );
};
