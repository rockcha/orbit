import { getPlanetsData } from "../../services/api";
import { useQuery } from "@tanstack/react-query";

const usePlanets = () => {
  return useQuery({
    queryFn: getPlanetsData,
    queryKey: ["planets"],
  });
};

export default usePlanets;
