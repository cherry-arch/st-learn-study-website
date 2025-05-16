
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LoadingScreen } from "@/components/LoadingScreen";
import { usePageTransition } from "@/hooks/usePageTransition";

const About = () => {
  const navigate = useNavigate();
  const { isLoading } = usePageTransition();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      {isLoading && <LoadingScreen />}
      <Navigation />
      <div className="container mx-auto px-4 py-8 relative">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 text-white hover:bg-white/10 absolute top-4 left-4 transition-all duration-300 hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Button>
        
        <div className="mt-20 max-w-4xl mx-auto bg-black/20 backdrop-blur-lg rounded-lg p-8 border border-purple-500/20">
          <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            About BrightLearn
          </h1>
          <div className="space-y-6 text-gray-200">
            <p className="animate-fade-up">
              BrightLearn is your comprehensive educational resource platform, designed to make learning accessible and engaging for students across various departments.
            </p>
            <p className="animate-fade-up delay-100">
              Our mission is to provide organized, high-quality study materials that help students excel in their academic journey.
            </p>
            <p className="animate-fade-up delay-200">
              We believe in the power of shared knowledge and collaborative learning, making education more accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
