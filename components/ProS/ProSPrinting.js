import React from "react";
import {
  CancelOutlined,
  InvertColors,
  Layers,
  LineWeight,
  PauseCircleOutline,
  TimerOutlined,
} from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSSelectedResin } from "../../atoms/proSSelectedResinAtom";

export const ProSPrinting = () => {
  const [selectedResin, setSelectedResin] = useRecoilState(proSSelectedResin);
  return (
    <div className="ProS-Printing-Screen">
      <div className="ProS-Printing-Screen-Container flex flex-col items-center w-full">
        <div className="flex items-center gap-[1.8rem] text-[2.4rem] h-[106px] mt-5">
          <h3 className="font-bold">CurrentPrint.stl</h3>
        </div>
        <div className="ProS-Printing-Container w-full flex flex-col items-center">
          <div className="ProS-Printing-Tanks flex items-center justify-center gap-12">
            <div className="relative">
              <img
                src="/printer-stl-image.png"
                alt=""
                className="w-[405px] h-[238px]"
              />
            </div>
          </div>
          <div className="ProS-Printing-Progress-Bar bg-[#555] rounded-full w-[95%] flex justify-center py-2 mt-12 text-[24px]">
            <p>Initializing</p>
          </div>
          <div className="ProS-Printing-Description flex flex-col items-center mt-6">
            <div className="ProS-Printing-Metrics flex gap-16 mt-2 text-[#BABABA] text-[24px]">
              <div className="ProS-Printing-Resin flex items-center">
                <InvertColors style={{ fontSize: "3.5rem" }} />
                <p>{selectedResin}</p>
              </div>
              <div className="ProS-Printing-Usage flex items-center">
                <LineWeight style={{ fontSize: "3.5rem" }} />
                <p>100 µm</p>
              </div>
              <div className="ProS-Printing-Time flex items-center">
                <TimerOutlined style={{ fontSize: "3.5rem" }} />
                <p>45 Mins</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProS-Printing-Buttons flex gap-4 w-[95%] mt-6">
          <div className="ProS-Printing-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] flex flex-[.33] items-center justify-center cursor-pointer transition hover:brightness-125">
            <div className="absolute left-[5%]">
              <PauseCircleOutline style={{ fontSize: "2.8rem" }} />
            </div>

            <p className="text-[24px] select-none">Pause Print</p>
          </div>
          <div className="ProS-Printing-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] flex flex-[.33] items-center justify-center cursor-pointer transition hover:brightness-125">
            <div className="absolute left-[5%]">
              <Layers style={{ fontSize: "2.8rem" }} />
            </div>

            <p className="text-[24px] select-none">View Layer</p>
          </div>
          <div className="ProS-Printing-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] flex flex-[.33] items-center justify-center cursor-pointer transition hover:brightness-125">
            <div className="absolute left-[5%]">
              <CancelOutlined style={{ fontSize: "2.8rem" }} />
            </div>

            <p className="text-[24px] select-none">Cancel Print</p>
          </div>
        </div>
      </div>
    </div>
  );
};
