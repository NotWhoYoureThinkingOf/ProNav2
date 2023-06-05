import React from "react";

export const ProSWarmingComponent = ({ image, currentTemp, targetTemp }) => {
  return (
    <div
      className="ProSWarmingComponent h-[100px] w-[480px] bg-[#191919] rounded-md flex items-center justify-center gap-8"
      style={{ fontWeight: 400 }}
    >
      <img src={image} />
      <div className="Current flex gap-3">
        <p className="opacity-[38%]">Current</p>
        <p>{currentTemp}°C</p>
      </div>
      <div className="Target flex gap-3">
        <p className="opacity-[38%]">Target</p>
        <p>{targetTemp}°C</p>
      </div>
    </div>
  );
};
