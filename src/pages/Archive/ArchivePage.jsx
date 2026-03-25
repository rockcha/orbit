import React from "react";
import useExplorationLogs from "../../commons/hooks/useExplorationLogs";
import LogGrid from "./components/LogGrid";
const ArchivePage = () => {
  const { data, isLoading, error } = useExplorationLogs();

  return (
    <div className="p-8">
      <LogGrid logs={data} />
    </div>
  );
};

export default ArchivePage;
