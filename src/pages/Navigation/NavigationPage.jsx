import { toast } from "sonner";
import usePlanets from "../../commons/hooks/usePlanets";
import LoadingOverlay from "../../commons/ui/LoadingOverlay";
import SortControls from "./components/SortControls";
import PlanetCardGrid from "./components/PlanetCardGrid";
import { useState, useEffect } from "react";
const NavigationPage = () => {
  const [planets, setPlanets] = useState([]);
  const { data, error, isLoading } = usePlanets();
  useEffect(() => {
    setPlanets(data);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.warning(error);
    }
  }, [error]);
  if (isLoading) return <h2 className="text-3xl text-white">로딩 중...</h2>;
  return (
    <div className="flex-center flex-col gap-4 px-14 py-10">
      <SortControls planets={planets} setPlanets={setPlanets} />
      <PlanetCardGrid planets={planets} />
    </div>
  );
};

export default NavigationPage;
