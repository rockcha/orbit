import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateSpaceshipData } from "../../services/api";
import { toast } from "sonner";

const useSpaceshipMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateSpaceshipData,
    onSuccess: (updatedData) => {
      queryClient.setQueryData(["spaceship"], (prev) => ({
        ...prev,
        ...updatedData,
      }));
      toast.success("우주선 정보가 업데이트되었습니다.");
    },
    onError: () => {
      toast.error("우주선 정보 업데이트에 실패했습니다.");
    },
  });

  const updateFuelByAmount = (amount) => {
    const spaceship = queryClient.getQueryData(["spaceship"]);
    if (!spaceship || mutation.isPending) return;
    if (amount < 0 && spaceship.isDamaged) {
      toast.error("손상된 우주선으로는 항해할 수 없습니다.");
      return false;
    }
    const nextFuel = spaceship.fuel + amount;
    if (nextFuel < 0) {
      toast.error("연료가 부족합니다.");
      return false;
    }
    mutation.mutate({ fuel: Math.min(nextFuel, 200) });
    return true;
  };
  const updateIsDamaged = (isDamaged) => {
    const spaceship = queryClient.getQueryData(["spaceship"]);
    if (!spaceship || mutation.isPending) return;

    if (isDamaged === spaceship.isDamaged) {
      return toast.info("동일한 상태입니다.");
    }
    mutation.mutate({ isDamaged: isDamaged });
  };

  return {
    consumeFuel: (amount) => updateFuelByAmount(-amount),
    chargeFuel: (amount) => updateFuelByAmount(amount),
    updateIsDamaged,
    isPending: mutation.isPending,
    error: mutation.error,
  };
};

export default useSpaceshipMutation;
