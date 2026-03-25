import { useQuery } from "@tanstack/react-query";
import { getExplorationLogsData } from "../../services/api";
const useExplorationLogs = () => {
  return useQuery({
    queryFn: getExplorationLogsData,
    queryKey: ["explorationLogs"],
  });
};

export default useExplorationLogs;
