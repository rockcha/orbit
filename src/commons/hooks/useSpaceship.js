import { useQuery } from "@tanstack/react-query";
import { getSpaceshipData } from "../../services/api";

const useSpaceship = () => {
  return useQuery({
    queryFn: getSpaceshipData,
    queryKey: ["spaceship"],
  });
};

export default useSpaceship;
