import React from "react";
import { Check, Lock, Wifi } from "@material-ui/icons";

export const ProSNetwork = ({ name, Secure, Connected, Last }) => {
  return (
    <div className="w-[60%] cursor-pointer">
      <div className="ProS-Network-Details flex items-center gap-8">
        {Connected && (
          <div>
            <Check />
          </div>
        )}
        <p className="text-[30px] flex-1 font-semibold">{name}</p>
        {Secure && <Lock style={{ fontSize: "2.5rem" }} />}
        <Wifi style={{ fontSize: "3.2rem" }} />
      </div>
      {!Last && (
        <div className="ProS-Network-Line border-b-[1px] border-white w-full opacity-50 mt-8 mb-6"></div>
      )}
    </div>
  );
};
