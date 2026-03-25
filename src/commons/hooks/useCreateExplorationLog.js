import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postExplorationLog } from "../../services/api";
import { toast } from "sonner";
const useCreateExplorationLog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postExplorationLog,
    onSuccess: () => {
      toast.success("성공적으로 저장했습니다!");
      queryClient.invalidateQueries({ queryKey: ["explorationLogs"] });
    },
    onError: () => {
      toast.warning("탐사일지 저장 오류");
    },
  });
};

export default useCreateExplorationLog;
