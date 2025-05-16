
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBot } from "@/components/SearchBot";
import { BackgroundAnimation } from "./departments/BackgroundAnimation";
import { Dark3DAnimation } from "./departments/Dark3DAnimation";
import { DepartmentCard } from "./departments/DepartmentCard";

const departments = [
  { name: "Electronics and Communication Engineering", code: "ECE", scheme: "2020 Scheme" },
  { name: "Computer Science Engineering", code: "CSE", scheme: "2020 Scheme" },
  { name: "Computer Science and Business Systems", code: "CSB", scheme: "2020 Scheme" },
  { name: "Computer Science (Data Science)", code: "CSD", scheme: "2020 Scheme" },
  { name: "Computer Science (AI and ML)", code: "CSM", scheme: "2020 Scheme" },
  { name: "Civil Engineering", code: "CIVIL", scheme: "2020 Scheme" },
  { name: "Mechanical Engineering", code: "MECH", scheme: "2020 Scheme" },
  { name: "Electrical and Electronics Engineering", code: "EEE", scheme: "2020 Scheme" }
];

export const DepartmentSelection = () => {
  const navigate = useNavigate();

  const handleDepartmentClick = (code: string) => {
    navigate(`/semester/${code}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-violet-950 relative overflow-hidden">
      {/* Add the new dark 3D animation */}
      <Dark3DAnimation />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 text-white hover:bg-white/10 absolute top-20 left-4 transition-all duration-300 hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse mt-24">
          Select Department
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000 relative z-10">
          {departments.map((dept, index) => (
            <DepartmentCard
              key={dept.code}
              name={dept.name}
              scheme={dept.scheme}
              code={dept.code}
              onClick={handleDepartmentClick}
              index={index}
            />
          ))}
        </div>
      </div>
      <SearchBot />
    </div>
  );
};
