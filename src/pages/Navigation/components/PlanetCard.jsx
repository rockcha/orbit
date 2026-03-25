import { Fuel, Skull, Timer } from "lucide-react";

const PlanetCard = ({ planet, onCardClick }) => {
  const name = planet?.name;
  const fuelCost = planet?.fuelCost ?? 0;

  const dangerLevel = planet?.dangerLevel ?? "?";
  const travelTime = planet?.travelTime ?? "?";
  const imgUrl = planet?.imgUrl || "/planets/noImg.png";

  return (
    <div>
      <div
        onClick={() => {
          onCardClick(planet);
        }}
        className="card bg-base-100 transition-300 cursor-pointer overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg"
      >
        <figure>
          <img src={imgUrl} alt={name} className="h-60 w-full object-cover" />
        </figure>

        <div className="card-body gap-4">
          <div>
            <h2 className="card-title text-xl font-bold">{name}</h2>
          </div>

          <div className="border-base-200 grid grid-cols-1 gap-2 border-t pt-4">
            <div className="bg-base-200/50 flex items-center justify-between rounded-lg px-3 py-2">
              <div className="text-base-content/70 flex items-center gap-2 text-sm">
                <Fuel size={16} />
                <span>연료 소모</span>
              </div>
              <span className="font-semibold">{fuelCost}</span>
            </div>

            <div className="bg-base-200/50 flex items-center justify-between rounded-lg px-3 py-2">
              <div className="text-base-content/70 flex items-center gap-2 text-sm">
                <Timer size={16} />
                <span>이동 시간</span>
              </div>
              <span className="font-semibold">{travelTime / 1000}초</span>
            </div>

            <div className="bg-base-200/50 flex items-center justify-between rounded-lg px-3 py-2">
              <div className="text-base-content/70 flex items-center gap-2 text-sm">
                <Skull size={16} />
                <span>위험도</span>
              </div>
              <span className="font-semibold">{dangerLevel}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
