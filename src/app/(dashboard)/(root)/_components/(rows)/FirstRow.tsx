import React from "react";
import MainChartBox from "../(chart)/MainChartBox";
import InfoTable from "../(table)/InfoTable";

const FirstRow = () => {
  return (
    <div className="grid grid=cols-1 md:grid-cols-3 gap-3 mb-3">
      <div className="md:col-span-2">
        <MainChartBox />
      </div>
      <div>
        <InfoTable />
      </div>
    </div>
  );
};

export default FirstRow;
