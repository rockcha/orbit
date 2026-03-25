import PlanetCard from "./PlanetCard";
import { useNavigate } from "react-router-dom";
import useSpaceshipMutation from "../../../commons/hooks/useSpaceshipMutation";
import { toast } from "sonner";
import { useEffect, useState } from "react";
const PlanetCardGrid = ({ planets }) => {
  const { isPending, consumeFuel, error } = useSpaceshipMutation();
  const [currentPlanet, setCurrentPlanet] = useState(null);
  const nav = useNavigate();

  const [open, setOpen] = useState(false);

  const onCardClick = (planet) => {
    if (!planet) return toast.warning("행성 정보가 없습니다!");
    setOpen((prev) => !prev);
    setCurrentPlanet(planet);
  };
  const onTryNavigate = () => {
    if (!currentPlanet) return toast.warning("행성 정보가 없습니다!");
    const ok = consumeFuel(currentPlanet.fuelCost);
    if (!ok) return;

    nav(`/travel/${currentPlanet.id}`);
  };
  useEffect(() => {
    if (error) {
      toast.warning(error);
    }
  }, [error]);

  return (
    <div className="card-grid">
      {planets?.map((planet) => (
        <PlanetCard key={planet.id} planet={planet} onCardClick={onCardClick} />
      ))}

      <div className={`modal ${open ? "modal-open" : ""}`} role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{currentPlanet?.name}</h3>
          <p className="py-4">{currentPlanet?.description}</p>

          <p>
            <span className="font-bold">연료 소모</span> :{" "}
            {currentPlanet?.fuelCost}
          </p>
          <p>
            <span className="font-bold">우주선 손상 확률</span> :{" "}
            {currentPlanet?.dangerLevel}%
          </p>

          <div className="modal-action">
            <button onClick={onTryNavigate} className="btn btn-secondary">
              {isPending ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "이동하기 "
              )}
            </button>
            <button className="btn" onClick={() => setOpen(false)}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetCardGrid;
