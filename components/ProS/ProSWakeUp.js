import React from "react";
import { useRecoilState } from "recoil";
import { proSNavState } from "../../atoms/proSNavAtom";

export const ProSWakeUp = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  return (
    <div className="ProS-Wake-Up flex justify-center h-[50rem]">
      <div className="ProS-Wake-Up-Container flex flex-col items-center w-full">
        <div className="flex flex-col items-center mt-80">
          <p className="font-bold text-[36px]">Wake up now?</p>
          <p className="text-[24px]">
            Do you want to manually wake the printer?
          </p>
        </div>
        <div className="ProS-Wake-Up-Buttons flex w-[95%] gap-6 mt-[17rem]">
          <div
            className="ProS-History-Printed-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center rounded-lg tracking-[.02em] cursor-pointer w-[98%] flex justify-center transition items-center hover:brightness-125"
            onClick={() => setMenu("sleeping")}
          >
            <p className="text-[24px] py-4">No</p>
          </div>
          <div
            className="ProS-History-Printed-Button relative bg-gradient-to-b from-[#2BC15F] to-[#1C813F] text-center rounded-lg tracking-[.02em] cursor-pointer w-[98%] flex justify-center transition items-center hover:brightness-125"
            onClick={() => setMenu("settings")}
          >
            <p className="text-[24px] py-4">Yes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
