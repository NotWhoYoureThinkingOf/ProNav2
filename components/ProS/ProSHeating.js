import React from "react";
import {
  CancelOutlined,
  InvertColors,
  LineWeight,
  TimerOutlined,
} from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSSelectedResin } from "../../atoms/proSSelectedResinAtom";

export const ProSHeating = () => {
  const [selectedResin, setSelectedResin] = useRecoilState(proSSelectedResin);
  return (
    <div className="ProS-Heating-Screen">
      <div className="ProS-Heating-Screen-Container flex flex-col items-center">
        <div className="flex items-center gap-[1.8rem] text-[2.4rem] h-[106px] mt-10">
          <h3 className="font-bold">CurrentPrint.stl</h3>
        </div>
        <div className="ProS-Heating-Container">
          <div className="ProS-Heating-Tanks flex items-center justify-center gap-12 mt-12">
            <div className="relative">
              <img
                src="/resin-tank.png"
                alt=""
                className="w-[281px] h-[115px]"
              />
              <div className="absolute bg-[#FFA800] h-[69px] w-[228px] rounded-full top-[-.70rem] left-[-8.5rem] flex items-center justify-center gap-6">
                <img src="/thermostat.png" alt="" />
                <div className="flex flex-col items-center text-black">
                  <p>Current: 28°C</p>
                  <p>Target: 35°C</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="Pro-PrintPlatform 1.png"
                alt=""
                className="w-[206px] h-[106px]"
              />
              <div className="absolute bg-[#FFA800] h-[69px] w-[228px] rounded-full top-[-1.2rem] right-[-9.5rem] flex items-center justify-center gap-6">
                <img src="/thermostat.png" alt="" />
                <div className="flex flex-col items-center text-black">
                  <p>Current: 24°C</p>
                  <p>Target: 25°C</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ProS-Heating-Description flex flex-col items-center gap-2 mt-6">
            <p className="text-[48px]">
              Warming Up Resin Tank and Build Platform
            </p>
            <p className="text-[24px] text-center text-[#BABABA]">
              This may take a few minutes depending on the ambient temperature.
              The build platform
              <br />
              may occassionally lower during this process to stir resin.
            </p>
            <div className="ProS-Heating-Metrics flex gap-6 mt-2 text-[#BABABA] text-[24px]">
              <div className="ProS-Heating-Resin flex items-center">
                <InvertColors style={{ fontSize: "3.5rem" }} />
                <p>{selectedResin}</p>
              </div>
              <div className="ProS-Heating-Usage flex items-center">
                <LineWeight style={{ fontSize: "3.5rem" }} />
                <p>100 µm</p>
              </div>
              <div className="ProS-Heating-Time flex items-center">
                <TimerOutlined style={{ fontSize: "3.5rem" }} />
                <p>45 Mins</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ProS-Heating-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 mt-5 w-[95%] rounded-lg tracking-[.02em] flex items-center justify-center cursor-pointer transition hover:brightness-125">
          <div className="absolute left-[2%]">
            <CancelOutlined style={{ fontSize: "2.8rem" }} />
          </div>

          <p className="text-[24px] select-none">Cancel print</p>
        </div>
      </div>
    </div>
  );
};
