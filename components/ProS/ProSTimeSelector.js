import React from "react";
import { ChevronLeft } from "@material-ui/icons";

export const ProSTimeSelector = ({ Open, Close, opentime, closetime }) => {
  return (
    <div className="ProS-Time-Selector-Container flex flex-col items-center">
      <ChevronLeft style={{ rotate: "90deg", fontSize: "4rem" }} />
      <div className="ProS-Time-Selector bg-[#3D3D3D] py-2 px-6 text-[2rem] rounded-xl w-[170px] flex justify-center whitespace-nowrap">
        {Open ? <p className="">{opentime} AM</p> : <p>{closetime} PM</p>}
      </div>
      <ChevronLeft style={{ rotate: "-90deg", fontSize: "4rem" }} />
    </div>
  );
};
