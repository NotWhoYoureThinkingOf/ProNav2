import React from "react";
import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../atoms/proSScreenAtom";
import { proSPreviousResinState } from "../../atoms/proSPreviousResinAtom";
import { proSSelectedResin } from "../../atoms/proSSelectedResinAtom";

export const ProSMaterialChangeConfirmation = () => {
  const [screen, setScreen] = useRecoilState(proSScreenState);
  const [previousResin, setPreviousResin] = useRecoilState(
    proSPreviousResinState
  );
  const [selectedResin, setSelectedResin] = useRecoilState(proSSelectedResin);

  return (
    <div className="ProS-Material-Change-Confirmation px-3">
      <div className="ProS-Material-Change-Confirmation-Header relative flex justify-center items-center">
        <div
          className="flex items-center justify-center bg-[#333] h-[106px] w-[112px] rounded-b-xl cursor-pointer transition hover:bg-[#555] absolute top-0 left-0"
          onClick={() => setScreen("resin_list")}
        >
          <ChevronLeft style={{ fontSize: "5rem" }} />
        </div>
      </div>
      <div className="ProS-Material-Change-Confirmation-Content pt-[106px] flex justify-center">
        <div className="ProS-Material-Change-Confirmation-Content-Container flex flex-col items-center relative">
          <img
            src="/resin-tank.png"
            alt="Resin Tank"
            className="w-[334px] h-[137px]"
          />
          <div className="flex flex-col items-center mt-12">
            <div className="flex flex-col items-center">
              <p className="text-[#999999] text-[32px]">
                Previous Resin Tank Material
              </p>
              <p className="text-[36px]">{previousResin}</p>
            </div>
            <div className="absolute top-[45%]">
              <ChevronLeft
                style={{
                  rotate: "270deg",
                  fontSize: "15rem",
                }}
              />
            </div>
            <div className="flex flex-col items-center mt-24">
              <p className="text-[#28B358] text-[32px]">
                New Resin Tank Material
              </p>
              <p className="text-[36px]">{selectedResin}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center items-center w-full h-[74px] bg-gradient-to-b from-[#2BC25F] to-[#1B7D3D]
       rounded-xl px-4 mt-24 cursor-pointer will-change-auto transition hover:brightness-125`}
        onClick={() => {
          setPreviousResin(selectedResin);
          setScreen("material_change_confirmed");
        }}
      >
        <p className="text-[24px]">Confirm and Save Changes</p>
      </div>
    </div>
  );
};
