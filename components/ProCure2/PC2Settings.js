import { InvertColors } from "@material-ui/icons";
import { useState } from "react";
import PC2ResinButton from "./PC2ResinButton";

const PC2Settings = () => {
  const [mute, setMute] = useState(false);

  console.log("mute", mute);

  return (
    <div className="ProCure2-Settings flex flex-col overflow-scroll">
      <div className="ProCure2-Info flex justify-between px-5 py-4 border-b-2 border-[#CCCCCC] border-opacity-50">
        <div className="ProCure2-Serial text-center">
          <p className="opacity-50 text-[18px]">Serial Number</p>
          <h3 className="text-[24px] font-bold">PC2A0121500359</h3>
        </div>
        <div className="ProCure2-IP text-center">
          <p className="opacity-50 text-[18px]">IP Address</p>
          <h3 className="text-[24px] font-bold">10.00.00.62</h3>
        </div>
      </div>
      <div className="ProCure2-Cleaning border-b-2 border-[#CCCCCC] border-opacity-50">
        <div className="flex items-center justify-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] cursor-pointer rounded-lg h-[78px] transition my-6  hover:brightness-125">
          <h2 className="text-[32px] font-semibold">Screen Cleaning Mode</h2>
        </div>
      </div>
      <div className="ProCure2-Software flex py-7 justify-center items-center gap-14">
        <div className="ProCure2-Software-Left flex flex-col items-center">
          <img
            src="/Software.png"
            className="h-[35px] w-[44.29px] object-contain"
          />
          <h2 className="text-[30px] font-semibold my-3">Software</h2>
          <div className="text-[24px] text-center">
            <p>Version</p>
            <p>1.2.7</p>
          </div>
        </div>
        <div className="ProCure2-Software-Center border-l-2 border-[#CCCCCC] border-opacity-50 h-[170px]"></div>
        <div className="ProCure2-Software-Right flex flex-col items-center">
          <InvertColors
            style={{ fontSize: "2.9rem", color: "#CCCCCC", opacity: ".5" }}
          />
          <h2 className="text-[30px] font-semibold mt-[.35rem] mb-[.2rem] -translate-y-1">
            Materials
          </h2>
          <div className="text-[24px] text-center">
            <p>Last Update</p>
            <p>12/05/2022</p>
          </div>
        </div>
      </div>
      <div className="ProCure2-Cleaning">
        <div className="flex items-center justify-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] cursor-pointer rounded-lg h-[78px] transition mt-9 hover:brightness-125">
          <h2 className="text-[32px] font-semibold">Check for Updates</h2>
        </div>
      </div>
      <div className="ProCure2-Settings-Language border-t-[2px] border-[#CCCCCC] border-opacity-50 flex flex-col items-center mt-8">
        <h3 className="text-[28px] font-semibold mt-5 mb-6">System Language</h3>
        <div className="w-full">
          <PC2ResinButton resin="English" />
        </div>
      </div>
    </div>
  );
};

export default PC2Settings;
