import React from "react";
import { useState } from "react";

export const ProSSoftware = () => {
  const [bolt, setBolt] = useState(false);

  return (
    <div className="ProS-Software px-3 text-[1.75rem] font-semibold">
      <div className="ProS-Software-Update">
        <h3 className="ProS-Software-Update-Title text-[#FFDD15]">
          Software Update
        </h3>
        <div className="ProS-Software-Update-Versions flex flex-col gap-2 font-normal text-[1.4rem] mt-4">
          <div className="ProS-Software-Current flex">
            <p className="">Current Version:&nbsp;</p>
            <p>7.0.5.21</p>
          </div>

          <div className="ProS-Software-Firmware flex">
            <p className="">Firmware Version:&nbsp;</p>
            <p>3.1.8</p>
          </div>
        </div>
      </div>
      <div className="ProS-Software-Automatic mt-14">
        <div className="ProS-Software-Auto-Toggle flex justify-between items-center">
          <h3>Automatic Updates</h3>
          <div
            className={`Pro-Main-Toggle proSToggleSwitch relative ${
              !bolt && "bg-[#3D3D3D]"
            }`}
            onClick={() => setBolt(!bolt)}
          >
            <div
              className={`proSToggle absolute ${bolt && "translate-x-[120%]"}`}
            ></div>
          </div>
        </div>
        <p className="font-normal text-[1.4rem] mt-2">
          Automatic updates will install at 11 PM but will never interrupt your
          printer operations.
        </p>
        <div className="ProS-Software-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer relative transition mt-8 hover:brightness-125">
          <p className="text-[24px] font-normal">Check for updates</p>
        </div>
      </div>
      <div className="ProS-Software-Line border-b-[1px] border-white w-full opacity-50 mt-8 mb-6"></div>
      <div className="ProS-Software-Materials-Update">
        <h3 className="ProS-Software-Materials-Title text-[#FFDD15]">
          Materials Update
        </h3>
        <p className="font-normal text-[1.4rem] mt-2">
          Materials are periodically updated and synced with the Pro S.
        </p>
        <div className="ProS-Materials-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer relative transition mt-6 hover:brightness-125">
          <p className="text-[24px] font-normal">Update</p>
        </div>
      </div>
    </div>
  );
};
