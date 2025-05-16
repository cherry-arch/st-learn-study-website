
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Check if we're on the home page
  const isHomePage = location.pathname === "/";
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    // Only scroll if on home page
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } else {
      // If not on home page, navigate to home and then scroll
      navigate("/?section=" + id);
    }
  };

  return (
    <nav className={`fixed w-full ${isHomePage ? 'bg-black/40 backdrop-blur-sm' : 'bg-black/90 backdrop-blur-md'} z-50 ${!isHomePage && 'shadow-[0_0_20px_rgba(139,92,246,0.3)]'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 
            onClick={() => navigate("/")} 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse cursor-pointer mr-8"
          >
            ST Learn
          </h1>
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-purple-400 hover:text-pink-500 transition-colors">About</button>
            <button onClick={() => scrollToSection('creator')} className="text-purple-400 hover:text-pink-500 transition-colors">Creator</button>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-purple-400 hover:text-pink-500 transition-colors bg-transparent">Contact Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-72 p-4 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-purple-500/30">
                      <div className="flex items-center space-x-2 mb-3">
                        <Phone className="h-4 w-4 text-purple-400" />
                        <a href="tel:9908264050" className="text-purple-400 hover:text-pink-500 transition-colors">9908264050</a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-purple-400" />
                        <a href="mailto:charansingh9494073118@gmail.com" className="text-purple-400 hover:text-pink-500 transition-colors text-sm">
                          charansingh9494073118@gmail.com
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Button 
        variant="ghost" 
        className="md:hidden absolute right-4 top-4" 
        size="icon"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-purple-400" />
        ) : (
          <Menu className="h-6 w-6 text-purple-400" />
        )}
      </Button>
      
      {isMenuOpen && (
        <div className={`md:hidden absolute w-full ${isHomePage ? 'bg-black/40' : 'bg-black/95'} backdrop-blur-sm animate-fade-in`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-purple-400 hover:text-pink-500 transition-colors text-lg py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('creator')} 
              className="text-purple-400 hover:text-pink-500 transition-colors text-lg py-2"
            >
              Creator
            </button>
            <div className="border-t border-purple-500/30 pt-3">
              <p className="text-purple-400 font-medium mb-2">Contact Us</p>
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <a href="tel:9908264050" className="text-purple-400 hover:text-pink-500 transition-colors">9908264050</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <a href="mailto:charansingh9494073118@gmail.com" className="text-purple-400 hover:text-pink-500 transition-colors text-sm">
                  charansingh9494073118@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
