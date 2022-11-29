import React from "react";
import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../atoms/proSScreenAtom";

export const ProSTankStatus = () => {
  const [screen, setScreen] = useRecoilState(proSScreenState);

  return (
    <div className="ProS-Tank-Status-Screen px-3">
      <div className="ProS-Tank-Status-Header relative flex justify-center items-center">
        <div
          className="flex items-center justify-center bg-[#333] h-[106px] w-[112px] rounded-b-xl cursor-pointer transition hover:bg-[#555] absolute top-0 left-0"
          onClick={() => setScreen("normal")}
        >
          <ChevronLeft style={{ fontSize: "5rem" }} />
        </div>
        <div className="flex items-center gap-[1.8rem] text-[2.4rem] h-[106px]">
          <h3 className="font-bold">Resin Tank 00000123456789</h3>
        </div>
      </div>
      <div className="ProS-Tank-Screen-Body flex justify-center pt-16 pb-6">
        <div className="ProS-Tank-Status flex justify-center w-[90%] gap-16">
          <img
            src="/resin-tank.png"
            alt="resin tank"
            className="w-[326px] h-[134px]"
          />
          <div className="ProS-Tank-Details flex flex-col flex-1 justify-center">
            <h3 className="font-bold text-[2.4rem]">Healthy Resin Tank</h3>
            <p className="text-[#999999] text-[28px]">
              This resin tank should be in optimal
              <br />
              condition for normal use
            </p>
          </div>
        </div>
      </div>
      <div className="ProS-Tank-Usage-Graph relative pl-[3.75rem] h-[10rem]">
        <div className="ProS-Tank-Usage-Fade w-[20%] h-[6.35rem] absolute left-[85%] bg-gradient-to-l from-black z-[9999]"></div>
        <div className="ProS-Tank-Usage-Bar bg-[#606060] absolute w-[1300px] h-[46px] rounded-3xl flex items-center pl-6">
          <p className="text-xl">
            First Print:<span>&nbsp;11/28/22</span>
          </p>
        </div>
        <div className="ProS-Tank-Usage-Values flex gap-[9rem] text-[30px] absolute translate-y-[4.25rem]">
          <p>0L</p>
          <p>5L</p>
          <p>10L</p>
          <p>15L</p>
          <p>20L</p>
          <p>25L</p>
          <p>30L</p>
        </div>
      </div>
      <div className="ProS-Tank-Metrics flex pl-[3.75rem] gap-[5rem]">
        <div className="ProS-Tank-Usage">
          <p className="text-[#999999] text-[30px]">Total Usage to Date</p>
          <p className="text-[54px]">0.087 Liters</p>
        </div>
        <div className="ProS-Tank-Material flex flex-col gap-5">
          <p className="text-[#999999] text-[30px]">Current Material</p>
          <div className="flex items-center gap-4">
            <img
              src="/Union.png"
              alt="Resin in tank"
              className="w-[52px] h-[35px]"
            />
            <p className="text-[30px]">SprintRay Die and Model 2 Gray</p>
          </div>
        </div>
      </div>
      <div className="ProS-Tank-Status-Buttons flex gap-8 pt-16">
        <div className="ProS-Nickname-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer flex-[.5] transition hover:brightness-125">
          <p className="text-[24px]">View Log</p>
        </div>
        <div className="ProS-Nickname-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer flex-[.5] transition hover:brightness-125">
          <p className="text-[24px]">Change Resin Tank Material</p>
        </div>
      </div>
    </div>
  );
};
