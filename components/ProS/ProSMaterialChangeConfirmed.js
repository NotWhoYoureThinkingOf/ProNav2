import React from "react";
import { ThumbUp } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../atoms/proSScreenAtom";
import { proSSelectedResin } from "../../atoms/proSSelectedResinAtom";

export const ProSMaterialChangeConfirmed = () => {
  const [screen, setScreen] = useRecoilState(proSScreenState);
  const [selectedResin, setSelectedResin] = useRecoilState(proSSelectedResin);
  return (
    <div className="ProS-Material-Change-Confirmed px-3">
      <div className="ProS-Material-Change-Confirmed-Content flex flex-col items-center mt-56">
        <div className="relative">
          <img src="/resin-tank.png" alt="" className="w-[452px] h-[185px]" />
          <ThumbUp
            style={{
              position: "absolute",
              top: "-75%",
              left: "30%",
              color: "#28B358",
              fontSize: "12rem",
            }}
          />
        </div>

        <div className="flex flex-col items-center mt-16">
          <p className="text-[#28B358] text-[32px]">
            Resin Tank Material Successfully Changed
          </p>
          <p className="text-[36px]">{selectedResin}</p>
        </div>
      </div>
      <div
        className="bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] rounded-lg flex justify-center items-center py-4 mt-28 relative cursor-pointer transition hover:brightness-125"
        onClick={() => setScreen("normal")}
      >
        <p className="text-[24px]">Continue to Home</p>
      </div>
    </div>
  );
};
