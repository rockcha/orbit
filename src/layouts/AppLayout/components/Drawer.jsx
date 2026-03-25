import React from "react";
import { Satellite, ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="drawer fixed top-1/2 left-4 z-50 w-10">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-1"
          className="rounded-full border-none px-4 py-2 text-white"
        >
          <ChevronsRight
            className="transition-300 cursor-pointer hover:scale-120"
            size={40}
          />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <h1 className="flex gap-4 px-2 py-6 text-2xl font-bold">
            <Satellite className="animate-float-soft" size={40} />
            Orbit
          </h1>
          <li>
            <Link to="/spaceship">우주선</Link>
          </li>
          <li>
            <Link to="/navigation">항해실</Link>
          </li>
          <li>
            <Link to="/archive">기록소</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
