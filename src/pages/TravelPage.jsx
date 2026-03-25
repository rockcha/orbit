import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePlanet from "../commons/hooks/usePlanet";
import { toast } from "sonner";
import useSpaceshipMutation from "../commons/hooks/useSpaceshipMutation";

const TravelPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = usePlanet(id);
  const { updateIsDamaged } = useSpaceshipMutation();

  const [progress, setProgress] = useState(0);
  const nav = useNavigate();
  useEffect(() => {
    if (!data) return;

    const getIsSpaceshipDamaged = () => {
      return Math.random() * 100 < data.dangerLevel;
    };

    //시작과 동시에 100으로 채우기
    setTimeout(() => {
      setProgress(100);
    }, 50);

    //중간 쯤 우주선 손상 계산
    setTimeout(() => {
      if (getIsSpaceshipDamaged()) {
        updateIsDamaged(true);
        toast.warning(`우주선이 손상되었습니다! (확률 : ${data.dangerLevel}%)`);
      } else {
        toast.success(
          `우주선이 손상되지 않았습니다! (확률 : ${data.dangerLevel}%)`,
        );
      }
    }, data.travelTime / 2);

    //시간 다 되면 행성이동

    setTimeout(() => {
      nav(`/planet/${data.id}`);
    }, data.travelTime + 100);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.warning(error);
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="flex-center min-h-screen text-white">로딩 중...</div>
    );
  }

  return (
    <div className="flex-center min-h-screen">
      <div className="flex-center flex-col gap-8">
        <h2 className="text-4xl text-white">목적지 : {data?.name}</h2>

        <div className="h-6 w-100 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full bg-green-400 transition-all ease-linear"
            style={{
              width: `${progress}%`,
              transitionDuration: `${data?.travelTime ?? 0}ms`,
            }}
          />
        </div>
        <p className="text-xl text-white">광속 비행 중....</p>
      </div>
    </div>
  );
};

export default TravelPage;
