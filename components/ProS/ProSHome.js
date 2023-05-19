import { PersonOutline, Wifi } from "@material-ui/icons";
import React, { useEffect } from "react";
import ProSHomeButton from "./ProSHomeButton";
import { useRecoilState } from "recoil";
import { proSSSIDState } from "../../atoms/proSSSIDAtom";
import { proSScreenState } from "../../atoms/proSScreenAtom";
import { proSSelectedResin } from "../../atoms/proSSelectedResinAtom";
import { proSNicknameState } from "../../atoms/proSNicknameState";

const ProSHome = () => {
  const [network, setNetwork] = useRecoilState(proSSSIDState);
  const [screen, setScreen] = useRecoilState(proSScreenState);
  const [selectedResin, setSelectedResin] = useRecoilState(proSSelectedResin);
  const [nickname, setNickname] = useRecoilState(proSNicknameState);

  return (
    <div className="ProSHome w-full h-full">
      <div className="ProSHome-Container w-full h-full flex gap-4">
        <div className="ProS-Container-Left flex-[.340] h-full">
          <div className="ProS-Left-Container h-full flex flex-col justify-center items-center gap-12">
            <div className="">
              <img src="ProS-Print.svg" className="w-[323px] h-[440px]" />
            </div>
            <div className="ProS-Left-Printer-Info flex gap-6 border-2 border-[#333333] w-4/5 h-[103px] rounded-lg overflow-hidden">
              <div className="bg-gradient-to-b from-[#2BC25F] to-[#1B7D3D] h-full w-2"></div>
              <div className="flex flex-col translate-y-2">
                <h4 className="text-[30px] font-bold tracking-[1px] max-w-[17rem]">
                  {nickname}
                </h4>
                <p className="text-[24px] text-[#999999]">PS95152619845</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProS-Container-Right flex-[.660] flex flex-col justify-center h-full mr-10 gap-16 -translate-y-2">
          <div className="ProS-Right-Top">
            <div className="ProS-Right-Status">
              <h2 className="text-[52px] font-bold tracking-[1px]">
                Ready to Print
              </h2>
              <p className="text-[32px] text-[#999999] mt-1 mb-8">
                Resin Tank and Build Platform installed.
              </p>
            </div>
            <div className="ProS-Right-Message">
              <p className="text-[32px] text-[#999999]">
                To begin printing upload print job from your
                <br />
                desktop, design dashboard, or insert a USB drive.
              </p>
            </div>
          </div>
          <div className="ProS-Right-Bottom flex flex-col gap-8">
            <ProSHomeButton
              Icon={<PersonOutline style={{ fontSize: "3.2rem" }} />}
              text="user@email.com"
            />
            <div className="" onClick={() => setScreen("tank_status")}>
              <ProSHomeButton
                Icon={
                  <img
                    src="/Resin-Tank.svg"
                    className="w-[47.32px] h-[32.05px]"
                  />
                }
                text={selectedResin}
                status="HEALTHY"
                SelectedResin
              />
            </div>
            <div className="">
              <ProSHomeButton
                Icon={<Wifi style={{ fontSize: "3rem" }} />}
                text={network}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProSHome;
