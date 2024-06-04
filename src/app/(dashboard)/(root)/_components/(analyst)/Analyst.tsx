import axios from "axios";
import React from "react";
import AnalystItem from "./AnalystItem";

const fetchAnalystEstimates = async () => {
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/financials");
    return data.analyst_estimates;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {};
  }
};

const Analyst = async () => {
  const info = await fetchAnalystEstimates();

  const analystArray = Object.entries(info);

  return (
    <div>
      <p className="text-[#212121] text-[18px] font-bold">Analyst Estimates</p>
      <div className="mt-3 bg-white rounded-[8px] px-[20px] py-[24px]">
        {analystArray.length > 0 &&
          analystArray.map(([key, value]: [key: string, value: any]) => {
            return <AnalystItem key={key} name={key} value={value} />;
          })}
      </div>
    </div>
  );
};

export default Analyst;
