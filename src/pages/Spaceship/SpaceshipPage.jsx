import React from "react";

import LoadingOverlay from "../../commons/ui/LoadingOverlay";
import ChargeCard from "./components/ChargeCard";
import SpaceshipCards from "./components/SpaceshipCards";
const SpaceshipPage = () => {
  return (
    <div className="p-8">
      <SpaceshipCards />
    </div>
  );
};

export default SpaceshipPage;
