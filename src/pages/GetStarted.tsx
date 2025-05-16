
import { Navigation } from "@/components/Navigation";
import { DepartmentSelection } from "@/components/DepartmentSelection";
import { LoadingScreen } from "@/components/LoadingScreen";
import { usePageTransition } from "@/hooks/usePageTransition";

const GetStarted = () => {
  const { isLoading } = usePageTransition();

  return (
    <div className="min-h-screen font-poppins">
      {isLoading && <LoadingScreen />}
      <Navigation />
      <DepartmentSelection />
    </div>
  );
};

export default GetStarted;
