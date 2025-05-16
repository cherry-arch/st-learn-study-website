
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
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
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center animate-fade-up relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 font-poppins text-white">
          Your Gateway to
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
            {" "}Modern Education
          </span>
        </h1>
        <p className="text-lg text-purple-200 mb-8 max-w-2xl">
          Access premium educational resources, collaborate with peers, and enhance your learning journey with our cutting-edge platform.
        </p>

        <Button 
          onClick={() => navigate("/get-started")}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] hover:scale-105 transform"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
        </Button>
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
    </div>
  );
};
