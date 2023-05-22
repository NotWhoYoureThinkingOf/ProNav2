import React from "react";

export const ProSUnifiedButtonRounded = ({ text }) => {
  return (
    <div className="ProSUnifiedMain-StatusButton bg-[#303132] flex justify-center items-center h-[80px] w-full rounded-md cursor-pointer hover:brightness-125">
      <p className="text-[24px]">{text}</p>
    </div>
  );
};
