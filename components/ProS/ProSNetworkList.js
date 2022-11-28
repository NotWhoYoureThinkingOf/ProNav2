import React from "react";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../atoms/proSScreenAtom";
import { ProSNetwork } from "./ProSNetwork";

export const ProSNetworkList = () => {
  const [screen, setScreen] = useRecoilState(proSScreenState);

  return (
    <div className="ProS-Network-List px-3">
      <div className="ProS-Network-List-Header relative flex justify-center items-center">
        <div
          className="flex items-center justify-center bg-[#333] h-[106px] w-[112px] rounded-b-xl cursor-pointer transition hover:bg-[#555] absolute top-0 left-0"
          onClick={() => setScreen("normal")}
        >
          <ChevronLeft style={{ fontSize: "5rem" }} />
        </div>
        <div className="flex items-center gap-[1.8rem] text-[2.4rem] h-[106px]">
          <h3 className="font-bold">Select a Wireless Network</h3>
        </div>
      </div>
      <div className="ProS-Networks pt-28 pb-16 flex flex-col items-center">
        <ProSNetwork name="Dental Office Wifi" Secure />
        <ProSNetwork name="Dental Office Wifi" />
        <ProSNetwork name="Dental Office Wifi" Secure />
        <ProSNetwork name="Dental Office Wifi" Secure Last />
      </div>
      <div className="ProS-Network-Switch relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 mx-20 rounded-lg tracking-[.02em] cursor-pointer transition hover:brightness-125 flex justify-center items-center">
        <p className="text-[24px] font-semibold">Switch to Hotspot</p>
        <div className="ProS-Network-Switch-Arrow absolute right-[1rem]">
          <ChevronRight style={{ fontSize: "3rem" }} />
        </div>
      </div>
    </div>
  );
};
