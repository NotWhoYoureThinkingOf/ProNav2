import React from "react";
import { TimerOutlined } from "@material-ui/icons";

export const PC2ZoneSelector = ({ zone, time, iconStyle }) => {
  return (
    <div className="PC2-Zone-Selector flex items-center text-[36px] w-full">
      <div className="PC2-Zone-Dot w-[16px] h-[16px] border-2 border-white rounded-full bg-gradient-to-b from-[#2BC25F] to-[#1B7D3D]"></div>
      {zone === "A" && <p className="flex-1 ml-4">ZONE A</p>}
      {zone === "CENTER" && <p className="flex-1 ml-4">CENTER</p>}
      {zone === "A+B" && <p className="flex-1 ml-4">ZONE A+B</p>}
      <TimerOutlined
        style={{ fontSize: "2.8rem", marginRight: ".5rem" }}
        className={iconStyle}
      />
      <p>{time}</p>
    </div>
  );
};
