import { Link, useNavigate } from "react-router-dom";
import { Satellite } from "lucide-react";
import { getIsExploring, getExploration } from "../commons/utils/localStorage";
import { toast } from "sonner";
const LandingPage = () => {
  const nav = useNavigate();
  const continueExploration = () => {
    if (!getIsExploring()) return toast.warning("진행 중인 탐험이 없습니다");
    const { planetId } = getExploration();
    if (!planetId) return toast.warning("행성 정보가 누락되었습니다!");
    nav(`/planet/${planetId}`);
  };
  return (
    <div className="flex-center min-h-screen">
      <div className="flex-center flex-col gap-4 text-white">
        <h1 className="flex-center gap-4 rounded-lg text-6xl font-bold">
          <Satellite className="animate-float-soft" size={80} />
          Orbit
        </h1>
        <p className="">행성들을 탐험하며, 탐험 일지를 작성해보세요!</p>

        <div className="flex gap-4">
          <button
            onClick={continueExploration}
            className="btn-hud btn-hud--lg mt-8"
          >
            탐험 이어서하기
          </button>
          <Link to="/spaceship" className="btn-hud btn-hud--lg mt-8">
            우주 정거장으로
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
