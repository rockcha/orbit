import { Fuel, Rocket } from "lucide-react";
import useSpaceship from "../../../commons/hooks/useSpaceship";
import LoadingOverlay from "../../../commons/ui/LoadingOverlay";

const ShipConditionPanel = () => {
  const { data, isLoading, error } = useSpaceship();
  const fuel = data?.fuel || 0;
  const isDamaged = data?.isDamaged;

  const getFuelColorClass = (fuel) => {
    if (fuel >= 80) return "text-green-700";
    if (fuel >= 60) return "text-lime-600";
    if (fuel >= 40) return "text-yellow-500";
    if (fuel >= 20) return "text-orange-500";
    return "text-red-600";
  };

  const fuelColor = getFuelColorClass(fuel);

  if (error)
    return (
      <div className="text-white">
        <div className="inline-grid *:[grid-area:1/1]">
          <div className="status status-error animate-ping"></div>
          <div className="status status-error"></div>
        </div>
        서버와 연결 끊김
      </div>
    );
  if (isLoading) return <LoadingOverlay />;
  return (
    <div className="flex flex-col justify-center text-white sm:flex-row sm:gap-12">
      <div className="flex-center gap-2">
        <div
          className="tooltip hover:tooltip-open tooltip-bottom"
          data-tip={`${fuel}/200`}
        >
          <span>연료 </span>

          <progress
            className={`progress w-40 ${fuelColor}`}
            value={fuel}
            max="200"
          ></progress>
        </div>
      </div>

      <div className="flex-center gap-2">
        우주선 상태:
        <div className={isDamaged ? "text-red-700" : "text-green-700"}>
          {isDamaged ? "손상" : "양호"}
        </div>
      </div>
    </div>
  );
};

export default ShipConditionPanel;
