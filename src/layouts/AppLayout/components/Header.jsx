import { Link } from "react-router-dom";
import { Database, House, Rocket, Satellite, ShipWheel } from "lucide-react";
import ShipConditionPanel from "./ShipConditionPanel";
const Header = () => {
  return (
    <header className="blur-2px fixed top-0 z-10 flex h-24 w-full items-center justify-between bg-black/60 px-8 text-white">
      <h1 className="flex-center gap-4">
        <Link to="/spaceship" className="btn-hud text-2xl">
          <Satellite className="animate-float-soft" size={30} />
          <div className="text-2xl">orbit</div>
        </Link>
      </h1>

      <nav className="flex-center gap-4">
        <Link className="btn-hud" to="/spaceship">
          우주선
        </Link>
        <Link className="btn-hud" to="/navigation">
          항해실
        </Link>
        <Link className="btn-hud" to="/archive">
          기록소
        </Link>
      </nav>
      <ShipConditionPanel />
    </header>
  );
};

export default Header;
