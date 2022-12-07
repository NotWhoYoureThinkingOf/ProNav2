import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { proCure2NavState } from "../../atoms/proCure2NavAtom";

export const PC2CuringNormal = () => {
  const [menu, setMenu] = useRecoilState(proCure2NavState);
  return (
    <div className="PC2-Curing-Normal flex justify-center">
      <div className="PC2-Curing-Normal-Container">
        <div className="PC2-Curing-Normal-Brand text-center mt-[4.5rem]">
          <p className="text-[24px]">BRAND NAME</p>
          <p className="text-[40px] font-bold">Material Name</p>
        </div>
        <div className="PC2-Curing-Normal-Time flex flex-col items-center mt-28">
          <p className="text-[24px]">Time remaining</p>
          <p className="text-[124px] leading-[8.5rem]">3:15</p>
          <div className="h-[27px] w-[440px] bg-[#333] rounded-full"></div>
        </div>
        <div className="PC2-Curing-Normal-Status flex flex-col items-center mt-32 gap-12">
          <div className="text-[24px]">Initializing...</div>
          <div
            className="flex items-center justify-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] cursor-pointer rounded-lg px-4 py-3 w-full relative transition hover:brightness-125"
            onClick={() => setMenu("cancel_normal")}
          >
            <h2 className="text-[36px] font-bold">Cancel</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
