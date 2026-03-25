import useSpaceship from "../../../commons/hooks/useSpaceship";
import ChargeCard from "./ChargeCard";
import RepairCard from "./RepairCard";
import LoadingOverlay from "../../../commons/ui/LoadingOverlay";
const SpaceshipCards = () => {
  const { data, loading, error } = useSpaceship();

  if (loading) return <LoadingOverlay msg="우주선 정보 가져오는 중..." />;
  if (error) return <LoadingOverlay msg="우주선 정보 오류" />;

  return (
    <div className="flex gap-4">
      <ChargeCard data={data} />
      <RepairCard data={data} />
    </div>
  );
};

export default SpaceshipCards;
