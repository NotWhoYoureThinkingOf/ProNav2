import React from "react";

export const ProSUnifiedButton = ({ text }) => {
  return (
    <div className="ProSUnifiedMain-StatusButton bg-[#303132] flex justify-center items-center h-[80px] w-full cursor-pointer hover:brightness-125">
      <p className="text-[24px]">{text}</p>
    </div>
  );
};
