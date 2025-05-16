
import { Navigation } from "@/components/Navigation";
import { Mail, Instagram, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LoadingScreen } from "@/components/LoadingScreen";
import { usePageTransition } from "@/hooks/usePageTransition";

const MatrixRain = () => {
  const characters = "01";
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-green-500 text-opacity-75 animate-matrix-rain whitespace-nowrap"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        >
          {[...Array(20)].map((_, j) => 
            characters.charAt(Math.floor(Math.random() * characters.length))
          ).join('')}
        </div>
      ))}
    </div>
  );
};

const Creator = () => {
  const navigate = useNavigate();
  const { isLoading } = usePageTransition();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {isLoading && <LoadingScreen />}
      <Navigation />
      <MatrixRain />
      
      <button 
        onClick={handleBack}
        className="fixed top-24 left-8 z-50 bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-300 shadow-lg"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Homepage</span>
      </button>

      <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
        <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-green-500/20">
          <h1 className="text-4xl font-bold mb-8 text-center text-green-500">
            Meet the Creator
          </h1>
          
          <div className="space-y-6 text-center">
            <div className="relative w-48 h-48 mx-auto">
              <div className="w-48 h-48 rounded-full border-2 border-green-500/20">
                <img 
                  src="/lovable-uploads/3402a466-b133-459f-a22d-012a97565a18.png"
                  alt="Charan Singh"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-green-500">Charan Singh</h2>
            
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:charansingh9494073118@gmail.com"
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
              
              <a
                href="https://www.instagram.com/sti_cherry?igsh=MTdkeTh0N3J5MGx0ZQ=="
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
