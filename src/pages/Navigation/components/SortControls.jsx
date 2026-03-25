import React from "react";

const SortControls = ({ planets, setPlanets }) => {
  console.log(planets);
  const sortByFuel = () => {
    const sorted = [...planets].sort((a, b) => a.fuelCost - b.fuleCost);
    setPlanets(sorted);
  };
  const sortByDistance = () => {
    const sorted = [...planets].sort((a, b) => a.travelTime - b.travelTime);
    setPlanets(sorted);
    console.log(sorted);
  };
  const sortByDanger = () => {
    const sorted = [...planets].sort((a, b) => a.dangerLevel - b.dangerLevel);
    setPlanets(sorted);
  };
  return (
    <form className="filter">
      <input className="btn btn-square" type="reset" value="×" />
      <input
        className="btn"
        type="radio"
        name="frameworks"
        aria-label="연료 순"
        onChange={sortByFuel}
      />
      <input
        className="btn"
        type="radio"
        name="frameworks"
        aria-label="거리 순"
        onChange={sortByDistance}
      />
      <input
        className="btn"
        type="radio"
        name="frameworks"
        aria-label="위험 순"
        onChange={sortByDanger}
      />
    </form>
  );
};

export default SortControls;
