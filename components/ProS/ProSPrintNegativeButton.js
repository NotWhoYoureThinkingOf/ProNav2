import React from "react";

export const ProSPrintNegativeButton = ({ issue }) => {
  return (
    <div className="ProS-Print-Negative-Button">
      <div className="relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer flex-[.5] transition hover:brightness-125">
        <p className="text-[24px]">{issue}</p>
      </div>
    </div>
  );
};
