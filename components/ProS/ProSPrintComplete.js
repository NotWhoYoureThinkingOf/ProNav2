import React from "react";
import { ThumbDown, ThumbUp } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSNavState } from "../../atoms/proSNavAtom";

export const ProSPrintComplete = () => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  return (
    <div className="ProS-Complete-Screen">
      <div className="ProS-Complete-Screen-Container flex flex-col items-center w-full">
        <div className="flex flex-col items-center text-[2.4rem] mt-10">
          <p className="text-[24px]">Print Job Complete</p>
          <h3 className="font-bold">CurrentPrint.stl</h3>
        </div>
        <div className="ProS-Complete-Container w-full flex flex-col items-center mt-12">
          <div className="ProS-Complete-Tank flex items-center justify-center gap-12">
            <div className="relative">
              <img
                src="/pro-tank-covered.png"
                alt=""
                className="w-[511px] h-[213px]"
              />
            </div>
          </div>
        </div>
        <div className="ProS-Complete-Cover flex flex-col items-center mt-8">
          <p className="text-[30px] font-semibold">Cover Resin Tank</p>
          <p className="text-[#BABABA] text-[24px]">
            Are you satisfied with the results of this print job?
          </p>
        </div>
        <div className="ProS-Complete-Buttons flex gap-4 w-[95%] mt-16">
          <div className="ProS-Complete-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] flex flex-[.33] items-center justify-center cursor-pointer transition hover:brightness-125">
            <div className="absolute left-[5%]">
              <ThumbDown style={{ fontSize: "2.8rem", color: "#FF0423" }} />
            </div>

            <p className="text-[24px] select-none">No</p>
          </div>
          <div
            className="ProS-Complete-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] flex flex-[.33] items-center justify-center cursor-pointer transition hover:brightness-125"
            onClick={() => setMenu("print")}
          >
            <p className="text-[24px] select-none">Dismiss</p>
          </div>
          <div className="ProS-Complete-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] flex flex-[.33] items-center justify-center cursor-pointer transition hover:brightness-125">
            <div className="absolute left-[5%]">
              <ThumbUp style={{ fontSize: "2.8rem", color: "#28B358" }} />
            </div>

            <p className="text-[24px] select-none">Yes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
