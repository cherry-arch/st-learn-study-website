import { useState } from "react";
import { Maximize2, Minimize2, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const SearchBot = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (platform: "google" | "youtube") => {
    const baseUrl = platform === "youtube" 
      ? "https://www.youtube.com/results?search_query="
      : "https://www.google.com/search?q=";
    
    window.open(baseUrl + encodeURIComponent(query), "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isExpanded ? (
        <Button
          onClick={() => setIsExpanded(true)}
          className="rounded-full p-3 sm:p-4 bg-primary hover:bg-primary/90 shadow-lg animate-bounce"
        >
          <Search className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 sm:p-4 w-[calc(100vw-2rem)] sm:w-80 max-w-md animate-fade-up">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="font-semibold text-sm sm:text-base">Better Clarification</h3>
            <div className="flex gap-1 sm:gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(false)}
                className="h-7 w-7 sm:h-8 sm:w-8"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(false)}
                className="h-7 w-7 sm:h-8 sm:w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <Input
              type="text"
              placeholder="Type your query..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-sm sm:text-base"
            />
            
            <Tabs defaultValue="google" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="google">Google</TabsTrigger>
                <TabsTrigger value="youtube">YouTube</TabsTrigger>
              </TabsList>
              <TabsContent value="google" className="mt-2">
                <Button 
                  className="w-full text-sm sm:text-base"
                  onClick={() => handleSearch("google")}
                >
                  Search Google
                </Button>
              </TabsContent>
              <TabsContent value="youtube" className="mt-2">
                <Button 
                  className="w-full text-sm sm:text-base"
                  onClick={() => handleSearch("youtube")}
                >
                  Search YouTube
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};