import { FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const semesters = [
  {
    number: 1,
    megaLink: "https://mega.nz/folder/2BxQBRZY#BTjsn9yx9zpOOmqh9BqN-g/folder/iBJlmBpa",
    materials: [
      { name: "Mathematics I", fileKey: "sem1/math1.pdf" },
      { name: "Physics", fileKey: "sem1/physics.pdf" },
      { name: "Chemistry", fileKey: "sem1/chemistry.pdf" }
    ]
  },
  {
    number: 2,
    megaLink: "https://mega.nz/folder/2BxQBRZY#BTjsn9yx9zpOOmqh9BqN-g/folder/HZIVVZgS",
    materials: [
      { name: "Mathematics II", link: "/materials/sem2/math" },
      { name: "Programming", link: "/materials/sem2/programming" }
    ]
  },
  {
    number: 3,
    megaLink: "https://mega.nz/folder/2BxQBRZY#BTjsn9yx9zpOOmqh9BqN-g/folder/vRRHWRTB",
    materials: [
      { name: "Data Structures", link: "/materials/sem3/ds" },
      { name: "Digital Logic", link: "/materials/sem3/digital" }
    ]
  },
  {
    number: 4,
    megaLink: "https://mega.nz/folder/2BxQBRZY#BTjsn9yx9zpOOmqh9BqN-g/folder/2BJRWRxY",
    materials: [
      { name: "Operating Systems", link: "/materials/sem4/os" },
      { name: "Database Systems", link: "/materials/sem4/dbms" }
    ]
  },
  {
    number: 5,
    megaLink: "https://mega.nz/folder/2BxQBRZY#BTjsn9yx9zpOOmqh9BqN-g/folder/WJBz2ZAD",
    materials: [
      { name: "Computer Networks", link: "/materials/sem5/networks" },
      { name: "Software Engineering", link: "/materials/sem5/se" }
    ]
  },
  {
    number: 6,
    megaLink: "https://mega.nz/folder/2BxQBRZY#BTjsn9yx9zpOOmqh9BqN-g/folder/fIRjgb5a",
    materials: [
      { name: "Web Development", link: "/materials/sem6/web" },
      { name: "Cloud Computing", link: "/materials/sem6/cloud" }
    ]
  }
];

export const ResourceGrid = () => {
  const navigate = useNavigate();

  const handleSemesterClick = async (semNumber: number) => {
    const semester = semesters.find(sem => sem.number === semNumber);
    if (!semester) return;
    window.open(semester.megaLink, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
                Math.random() * 255
              }, 0.6)`,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
          Study Materials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {semesters.map((semester) => (
            <button
              key={semester.number}
              onClick={() => handleSemesterClick(semester.number)}
              className="group relative focus:outline-none transform transition-all duration-300 hover:scale-110"
            >
              <div className="aspect-square rounded-2xl flex items-center justify-center bg-gradient-to-r from-[#4f46e5] to-[#e11d48] transform transition-all duration-300 hover:rotate-6 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30 transition-opacity"></div>
                <div className="text-white text-3xl font-bold font-poppins relative z-10 group-hover:scale-110 transition-transform">
                  Sem {semester.number}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }
            50% {
              transform: translate(20px, 20px) rotate(180deg);
            }
            100% {
              transform: translate(0, 0) rotate(360deg);
            }
          }
        `}
      </style>
    </section>
  );
};
