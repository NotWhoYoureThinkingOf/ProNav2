import React from "react";

export const ProSUnifiedBottomMultiButton = ({ text }) => {
  return (
    <div className="ProSUnifiedBottomMultiButton bg-[#535455] rounded-t-md flex justify-center items-center h-[80px] absolute bottom-0 w-full cursor-pointer hover:brightness-125">
      <p className="text-[24px]">{text}</p>
    </div>
  );
};
