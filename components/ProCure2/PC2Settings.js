import { InvertColors } from "@material-ui/icons";
import { useState } from "react";
import PC2ResinButton from "./PC2ResinButton";

const PC2Settings = () => {
  const [mute, setMute] = useState(false);

  console.log("mute", mute);

  return (
    <div className="ProCure2-Settings flex flex-col">
      <div className="ProCure2-Mute flex items-center gap-6 px-2 pt-2 pb-10">
        <div
          className={`ProCure2-toggle mute-switch w-[100px] flex items-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] transition ${
            mute && "from-[#2BC25F] to-[#1B7D3D]"
          }`}
          onClick={() => setMute(!mute)}
        >
          <div
            className={`toggle h-[46px] w-[46px] bg-white ${
              !mute ? "ml-[.1rem]" : "ml-[3.3rem]"
            }`}
          ></div>
        </div>
        <h3 className="text-[30px] font-semibold">Mute sounds</h3>
      </div>
      <div className="ProCure2-Info flex justify-between px-5 py-4 border-t-2 border-b-2 border-[#CCCCCC] border-opacity-50">
        <div className="ProCure2-Serial text-center">
          <p className="opacity-50 text-[18px]">Serial Number</p>
          <h3 className="text-[24px] font-bold">SRC123456789</h3>
        </div>
        <div className="ProCure2-IP text-center">
          <p className="opacity-50 text-[18px]">IP Address</p>
          <h3 className="text-[24px] font-bold">00.00.00.00</h3>
        </div>
      </div>
      <div className="ProCure2-Cleaning border-b-2 border-[#CCCCCC] border-opacity-50">
        <div className="flex items-center justify-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] cursor-pointer rounded-lg h-[78px] transition my-6  hover:brightness-125">
          <h2 className="text-[32px] font-semibold tracking-[.5px]">
            Screen Cleaning Mode
          </h2>
        </div>
      </div>
      <div className="ProCure2-Software flex py-7 justify-center items-center gap-14">
        <div className="ProCure2-Software-Left flex flex-col items-center">
          <img
            src="/Software.png"
            className="h-[35px] w-[44.29px] object-contain"
          />
          <h2 className="text-[30px] font-semibold my-2">Software</h2>
          <div className="text-[24px] text-center">
            <p>Version</p>
            <p>00.00.00</p>
          </div>
        </div>
        <div className="ProCure2-Software-Center border-l-2 border-[#CCCCCC] border-opacity-50 h-[170px]"></div>
        <div className="ProCure2-Software-Right flex flex-col items-center">
          <InvertColors
            style={{ fontSize: "2.9rem", color: "#CCCCCC", opacity: ".5" }}
          />
          <h2 className="text-[30px] font-semibold my-[.35rem] -translate-y-1">
            Materials
          </h2>
          <div className="text-[24px] text-center">
            <p>Last Update</p>
            <p>10/25/21</p>
          </div>
        </div>
      </div>
      <div className="ProCure2-Cleaning">
        <div className="flex items-center justify-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] cursor-pointer rounded-lg h-[78px] transition mt-8 hover:brightness-125">
          <h2 className="text-[32px] font-semibold tracking-[.5px]">
            Check for Updates
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PC2Settings;
