import React from "react";
import { ChevronRight } from "@material-ui/icons";

export const ProSResin = ({ resinName }) => {
  return (
    <div className="bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] rounded-lg flex justify-center items-center py-3 relative cursor-pointer transition hover:brightness-125">
      <p className="text-[24px]">{resinName}</p>
      <div className="absolute right-5">
        <ChevronRight style={{ fontSize: "3rem", color: "#999999" }} />
      </div>
    </div>
  );
};
