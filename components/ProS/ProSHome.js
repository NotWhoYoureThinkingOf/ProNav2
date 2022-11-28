import { PersonOutline, Wifi } from "@material-ui/icons";
import React from "react";
import ProSHomeButton from "./ProSHomeButton";
import { useRecoilState } from "recoil";
import { proSSSIDState } from "../../atoms/proSSSIDAtom";

const ProSHome = () => {
  const [network, setNetwork] = useRecoilState(proSSSIDState);

  return (
    <div className="ProSHome w-full h-full">
      <div className="ProSHome-Container w-full h-full flex gap-4">
        <div className="ProS-Container-Left flex-[.340] h-full">
          <div className="ProS-Left-Container h-full flex flex-col justify-center items-center gap-12">
            <div className="">
              <img src="ProS-Print.svg" className="w-[323px] h-[440px]" />
            </div>
            <div className="ProS-Left-Printer-Info flex gap-8 border-2 border-[#333333] w-4/5 h-[103px] rounded-lg overflow-hidden">
              <div className="flex-[.05] bg-gradient-to-b from-[#2BC25F] to-[#1B7D3D] h-full"></div>
              <div className="flex-[.95] flex flex-col">
                <h4 className="text-[36px] font-bold tracking-[1px]">
                  Pro S Printer
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
            <ProSHomeButton
              Icon={
                <img
                  src="/Resin-Tank.svg"
                  className="w-[47.32px] h-[32.05px]"
                />
              }
              text="Selected Resin"
              status="HEALTHY"
              SelectedResin
            />
            <ProSHomeButton
              Icon={<Wifi style={{ fontSize: "3rem" }} />}
              text={network}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProSHome;
