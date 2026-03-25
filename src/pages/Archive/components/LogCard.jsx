import React from "react";
import usePlanet from "../../../commons/hooks/usePlanet";
import { getTimeAgo } from "../../../commons/utils/date";

const LogCard = ({ log }) => {
  const { data, isLoading, error } = usePlanet(log?.planetId);

  if (!log) return null;

  if (isLoading) {
    return (
      <div className="card card-side bg-base-100 min-h-44 overflow-hidden rounded-2xl shadow-md">
        <div className="flex w-full items-center justify-center p-6">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="card card-side bg-base-100 min-h-44 overflow-hidden rounded-2xl shadow-md">
        <div className="p-6">
          <p className="text-error text-sm">행성 정보를 불러오지 못했습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card card-side min-h-44 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <figure className="relative h-44 w-36 shrink-0 overflow-hidden bg-slate-800">
        <img
          src={data.imgUrl || "/noImg.png"}
          alt={data.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </figure>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-3">
          <div>
            <h2 className="text-lg font-bold text-white">
              탐사 행성: <span className="text-cyan-300">{data.name}</span>
            </h2>
          </div>

          <p className="text-sm leading-6 text-slate-200">{log.content}</p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-slate-400">
          <span>기록 시간</span>
          <span>{getTimeAgo(log.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default LogCard;
