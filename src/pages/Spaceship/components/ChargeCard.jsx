import { useEffect, useState } from "react";
import useSpaceshipMutation from "../../../commons/hooks/useSpaceshipMutation";
import { toast } from "sonner";
import { Fuel } from "lucide-react";

const ChargeCard = ({ data }) => {
  const { error, isPending, chargeFuel, consumeFuel } = useSpaceshipMutation();
  const [amount, setAmount] = useState(10);

  const fuel = data?.fuel ?? 0;
  const maxFuel = 200;

  const onChargeFuel = () => {
    chargeFuel(amount);
  };

  const onConsumeFuel = () => {
    consumeFuel(10);
  };

  useEffect(() => {
    if (error) {
      toast.warning("우주선 정보 업데이트 실패!");
    }
  }, [error]);

  return (
    <div className="pl-10">
      <div className="card card-xl bg-base-100 w-96 shadow-sm">
        <div className="card-body gap-4">
          <div className="flex items-center gap-2">
            <Fuel size={40} />
            <h2 className="card-title text-xl">연료 충전하기</h2>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">현재 연료</span>
              <span>
                {fuel} / {maxFuel}
              </span>
            </div>

            <progress
              className="progress progress-primary w-full"
              value={fuel}
              max={maxFuel}
            />
          </div>

          <div className="space-y-2">
            <label className="label p-0">
              <span className="label-text font-medium">충전할 연료량</span>
            </label>

            <select
              className="select select-bordered w-full"
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
              disabled={isPending}
            >
              <option value={10}>10</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
              <option value={70}>70</option>
              <option value={90}>90</option>
            </select>
          </div>

          <div className="card-actions">
            <button
              onClick={onChargeFuel}
              className="btn"
              disabled={isPending || fuel >= maxFuel}
            >
              {isPending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                `${amount} 충전`
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargeCard;
