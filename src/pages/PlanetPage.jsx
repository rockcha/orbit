import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { updateExploration } from "../commons/utils/localStorage";
import { useParams } from "react-router-dom";
import usePlanet from "../commons/hooks/usePlanet";
import useCreateExplorationLog from "../commons/hooks/useCreateExplorationLog";
const PlanetPage = () => {
  const [input, setInput] = useState("");
  const nav = useNavigate();
  const { id } = useParams();
  const { data } = usePlanet(id);
  const { mutate, isPending } = useCreateExplorationLog();
  //로컬 스토리지에 현재 탐험 상태 저장
  useEffect(() => {
    if (!id) return;
    const explorationData = {
      isExploring: true,
      planetId: id,
    };
    updateExploration(explorationData);
  }, [id]);

  const onSave = () => {
    const trimmed = input.trim();
    if (!trimmed) return toast.warning("내용을 작성해주세요!");

    const explorationData = {
      isExploring: false,
      planetId: null,
    };

    const explorationLog = {
      planetId: id,
      content: input,
      createdAt: new Date().toISOString(),
    };
    mutate(explorationLog);
    updateExploration(explorationData);
    nav("/archive");
  };
  return (
    <div className="fixed-center">
      <section className="section">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-2xl text-white">
            탐사일지 - {data?.name}
          </legend>
          <div className="flex-center my-4 gap-2">
            <img className="h-40 w-40 rounded-lg" src={data?.imgUrl} />
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="textarea h-40 w-100"
              placeholder="예)표면에서 얼음 흔적 발견..."
            ></textarea>
          </div>

          <button onClick={onSave} className="btn-hud flex-1">
            {isPending ? "로딩 중..." : "저장하기"}
          </button>
        </fieldset>
      </section>
    </div>
  );
};

export default PlanetPage;
