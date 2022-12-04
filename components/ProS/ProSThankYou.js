import React from "react";
import { useRecoilState } from "recoil";
import { proSNavState } from "../../atoms/proSNavAtom";

export const ProSThankYou = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  return (
    <div className="ProS-Thank-You-Screen flex flex-col items-center h-full">
      <h3 className="font-bold text-[64px] flex-1 mt-64">
        Thank You for Your Feedback
      </h3>
      <div
        className="ProS-Complete-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 w-[85%] mt-[20rem] rounded-lg tracking-[.02em] flex items-center justify-center cursor-pointer transition hover:brightness-125"
        onClick={() => setMenu("print")}
      >
        <p className="text-[24px] select-none">Home</p>
      </div>
    </div>
  );
};
