import React from "react";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../atoms/proSScreenAtom";

export const ProSMaterialSelection = () => {
  const [screen, setScreen] = useRecoilState(proSScreenState);
  return (
    <div className="ProS-Material-Selection px-3">
      <div className="ProS-Material-Selection-Header relative flex justify-center items-center">
        <div
          className="flex items-center justify-center bg-[#333] h-[106px] w-[112px] rounded-b-xl cursor-pointer transition hover:bg-[#555] absolute top-0 left-0"
          onClick={() => setScreen("tank_status")}
        >
          <ChevronLeft style={{ fontSize: "5rem" }} />
        </div>
        <div className="flex items-center gap-[1.8rem] text-[2.4rem] h-[106px]">
          <h3 className="font-bold">Resin Tank 00000123456789</h3>
        </div>
      </div>
      <div className="ProS-Material-Select-Image-Container flex justify-center pt-16 pb-6">
        <div className="ProS-Material-Select-Image flex justify-center w-[90%] gap-16">
          <img
            src="/resin-tank.png"
            alt="resin tank"
            className="w-[452px] h-[185px]"
          />
        </div>
      </div>
      <div className="ProS-Material-Select-Change-Info flex flex-col text-center pt-6 gap-4">
        <h3 className="text-[2.4rem]">Change Resin Tank Material</h3>
        <p className="text-[28px] text-[#999999]">
          Frequently changing the resin tank material can shorten the lifespan
          of your tank and is not
          <br />
          recommended. If you must change material, drain the tank and
          thoroughly clean before adding
          <br />a new material type.
        </p>
      </div>
      <div className="ProS-Material-Select-Change-Button-Container flex justify-center w-full">
        <div className="ProS-Material-Select-Change-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center mt-20 rounded-lg tracking-[.02em] cursor-pointer w-[98%] flex transition justify-center items-center hover:brightness-125" onClick={() => setScreen("material_change")}>
          <p className="text-[24px] py-4">
            Continue to Change Resin Tank Material
          </p>
          <div className="absolute right-0">
            <ChevronRight style={{ fontSize: "3rem", opacity: "50%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
