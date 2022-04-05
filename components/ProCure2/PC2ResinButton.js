import { ChevronRight } from "@material-ui/icons";
import React from "react";

const PC2ResinButton = ({ resin }) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] cursor-pointer rounded-lg px-4 py-3 hover:brightness-125">
      <h2 className="text-2xl font-semibold">{resin}</h2>
      <ChevronRight style={{ color: "#999999", fontSize: "3.5rem" }} />
    </div>
  );
};

export default PC2ResinButton;
