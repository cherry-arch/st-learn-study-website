import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FileText, ArrowLeft, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

interface FileObject {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: any;
}

export const SemesterMaterials = () => {
  const { semesterNumber } = useParams();
  const navigate = useNavigate();
  const [materials, setMaterials] = useState<FileObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMaterials();
  }, [semesterNumber]);

  const fetchMaterials = async () => {
    try {
      const { data: files, error } = await supabase.storage
        .from('study_materials')
        .list(`sem${semesterNumber}`);

      if (error) {
        toast.error("Failed to fetch study materials");
        return;
      }

      setMaterials(files || []);
    } catch (error) {
      toast.error("Error accessing study materials");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (fileName: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('study_materials')
        .download(`sem${semesterNumber}/${fileName}`);

      if (error) {
        toast.error("Failed to download file");
        return;
      }

      // Create a download link and trigger it
      const url = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("Download started!");
    } catch (error) {
      toast.error("Error downloading file");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6 text-white hover:text-primary-light group"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-[-2px] transition-transform" />
          Back
        </Button>

        <Card className="bg-black/50 border-primary/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Semester {semesterNumber} Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[60vh] rounded-md border border-primary/20 p-4">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-pulse text-primary">Loading materials...</div>
                </div>
              ) : materials.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <FileText className="h-16 w-16 mb-4 opacity-50" />
                  <p>No materials available for this semester yet.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {materials.map((file) => (
                    <div
                      key={file.id}
                      className="group flex items-center justify-between p-4 rounded-lg bg-black/30 border border-primary/10 hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-center space-x-4">
                        <FileText className="h-6 w-6 text-primary" />
                        <div>
                          <p className="text-white font-medium">{file.name}</p>
                          <p className="text-sm text-gray-400">
                            Last updated: {new Date(file.updated_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary-light"
                        onClick={() => handleDownload(file.name)}
                      >
                        <Download className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};