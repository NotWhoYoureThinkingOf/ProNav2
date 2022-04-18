import { ChevronRight } from "@material-ui/icons";
import React from "react";

const ProSHomeButton = ({ Icon, text, status, SelectedResin }) => {
  return (
    <div
      className={`flex items-center w-full h-[74px] bg-gradient-to-b ${
        SelectedResin
          ? "from-[#2BC25F] to-[#1B7D3D]"
          : "from-[#6B6A6A] to-[#3D3D3D]"
      } rounded-xl px-4 cursor-pointer will-change-auto transition hover:brightness-125`}
    >
      <div className="flex-[.125] flex justify-center">{Icon}</div>
      <div className="flex-1 flex items-center text-[24px] font-bold pl-6">
        <p className="flex-1">{text}</p>
        {status && <p>{status}</p>}
      </div>
      <ChevronRight
        style={
          SelectedResin
            ? { fontSize: "4rem", color: "#FFFFFF" }
            : { fontSize: "4rem", color: "#999999" }
        }
      />
    </div>
  );
};

export default ProSHomeButton;
