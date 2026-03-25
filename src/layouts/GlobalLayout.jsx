import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { FlashlightOff, Flashlight } from "lucide-react";

import {
  getImgUrlByPathname,
  getLabelByPathname,
} from "../commons/utils/route";

const GlobalLayout = () => {
  const location = useLocation();

  const label = getLabelByPathname(location.pathname);
  const imgUrl = getImgUrlByPathname(location.pathname);

  const [light, setLight] = useState(false);
  const lightIcon = light ? (
    <FlashlightOff size={30} />
  ) : (
    <Flashlight size={30} />
  );
  const overlayBg = light ? "" : "bg-black/50";

  return (
    <div className="relative min-h-screen">
      <div className="blur-2px fixed bottom-0 z-30 flex h-24 w-full items-center justify-between bg-black/60 px-8 text-white">
        <div className="flex-center gap-4 text-3xl">
          <div className="inline-grid *:[grid-area:1/1]">
            <div className="status status-success animate-ping"></div>
            <div className="status status-success"></div>
          </div>
          {label}
        </div>

        <button onClick={() => setLight((prev) => !prev)} className="btn-hud">
          {lightIcon}
        </button>
      </div>

      <img
        src={imgUrl}
        alt={imgUrl}
        className="fixed inset-0 h-full w-full object-cover"
      />
      <div className={`fixed inset-0 z-0 ${overlayBg} transition-500`} />

      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default GlobalLayout;
