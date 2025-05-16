
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SearchBot } from "@/components/SearchBot";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";

const Index = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState({
    about: false,
    creator: false
  });

  // Handle scroll to section if coming from another page
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay to ensure page is loaded
      }
    }
  }, [location]);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const creatorSection = document.getElementById('creator');
      
      if (aboutSection) {
        const aboutPosition = aboutSection.getBoundingClientRect();
        setIsVisible(prev => ({
          ...prev, 
          about: aboutPosition.top < window.innerHeight - 150
        }));
      }
      
      if (creatorSection) {
        const creatorPosition = creatorSection.getBoundingClientRect();
        setIsVisible(prev => ({
          ...prev,
          creator: creatorPosition.top < window.innerHeight - 150
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen font-poppins">
      <Navigation />
      <Hero />
      
      {/* About Section */}
      <div id="about" className="min-h-screen bg-black py-24 px-4">
        <div className="container mx-auto px-4 py-8 relative">
          <div className={`max-w-4xl mx-auto bg-black/20 backdrop-blur-lg rounded-lg p-8 border border-purple-500/20 transition-all duration-1000 transform ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              About BrightLearn
            </h1>
            <div className="space-y-6 text-gray-200">
              <p className={`transition-all duration-1000 delay-300 transform ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                BrightLearn is your comprehensive educational resource platform, designed to make learning accessible and engaging for students across various departments.
              </p>
              <p className={`transition-all duration-1000 delay-500 transform ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                Our mission is to provide organized, high-quality study materials that help students excel in their academic journey.
              </p>
              <p className={`transition-all duration-1000 delay-700 transform ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                We believe in the power of shared knowledge and collaborative learning, making education more accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Creator Section */}
      <div id="creator" className="min-h-screen bg-black relative overflow-hidden py-24 px-4">
        {/* Matrix Rain Animation */}
        <MatrixRain />
        
        <div className="container mx-auto px-4 pt-8 pb-8 relative z-10">
          <div className={`max-w-2xl mx-auto bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-green-500/20 transition-all duration-1000 transform ${isVisible.creator ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <h1 className="text-4xl font-bold mb-8 text-center text-green-500">
              Meet the Creator
            </h1>
            
            <div className="space-y-6 text-center">
              <div className={`relative w-48 h-48 mx-auto transition-all duration-1000 delay-300 transform ${isVisible.creator ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}>
                <div className="w-48 h-48 rounded-full border-2 border-green-500/20">
                  <img 
                    src="/lovable-uploads/3402a466-b133-459f-a22d-012a97565a18.png"
                    alt="Charan Singh"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              <h2 className={`text-2xl font-bold text-green-500 transition-all duration-1000 delay-500 transform ${isVisible.creator ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Charan Singh</h2>
              
              <div className={`flex justify-center space-x-6 transition-all duration-1000 delay-700 transform ${isVisible.creator ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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
      
      <SearchBot />
    </div>
  );
};

// Matrix Rain Animation Component with enhanced effects
const MatrixRain = () => {
  const characters = "01";
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute text-green-500 text-opacity-75 animate-matrix-rain whitespace-nowrap"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            textShadow: '0 0 5px #00ff00',
          }}
        >
          {[...Array(30)].map((_, j) => 
            characters.charAt(Math.floor(Math.random() * characters.length))
          ).join('')}
        </div>
      ))}
    </div>
  );
};

export default Index;
