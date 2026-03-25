import { getPlanetDataById } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
const usePlanet = (id) => {
  return useQuery({
    queryFn: () => getPlanetDataById(id),
    queryKey: ["planet", id],
  });
};

export default usePlanet;
