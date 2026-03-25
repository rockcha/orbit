import React from "react";
import LogCard from "./LogCard";
const LogGrid = ({ logs }) => {
  console.log(logs);
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
      {logs?.map((log) => (
        <LogCard log={log} />
      ))}
    </div>
  );
};

export default LogGrid;
