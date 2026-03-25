import { useEffect } from "react";
import useSpaceshipMutation from "../../../commons/hooks/useSpaceshipMutation";
import { toast } from "sonner";
import LoadingOverlay from "../../../commons/ui/LoadingOverlay";
import { Wrench } from "lucide-react";

const RepairCard = ({ data }) => {
  const { updateIsDamaged, isPending, error } = useSpaceshipMutation();

  useEffect(() => {
    if (error) {
      toast.warning("우주선 업데이트 에러");
    }
  }, [error]);

  return (
    <div className="pl-10">
      <div className="card bg-base-100 card-xl w-96 shadow-sm">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <Wrench size={40} />
            <h2 className="card-title">우주선 수리하기</h2>
          </div>
          <p>우주선 상태: {data?.isDamaged ? "손상" : "양호"}</p>
          <div className="card-actions justify-between">
            <button
              onClick={() => {
                updateIsDamaged(true);
              }}
              className={`btn ${isPending ? "btn-disabled" : ""}`}
            >
              {isPending ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "손상시키기(테스트용)"
              )}
            </button>

            <button
              onClick={() => {
                updateIsDamaged(false);
              }}
              className={`btn ${isPending ? "btn-disabled" : ""}`}
            >
              {isPending ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "수리하기"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairCard;
