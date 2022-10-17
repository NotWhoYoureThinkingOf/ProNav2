import React from "react";
import { useState } from "react";

const ProSPrinter = () => {
  const [bolt, setBolt] = useState(false);

  return (
    <div className="ProS-Printer px-3 text-[1.75rem] font-semibold">
      <div className="ProS-Printer-Bolt flex justify-between items-center">
        <h3>Bolt Speed</h3>
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
      <div className="ProS-Printer-Line border-b-[1px] border-white w-full opacity-50 mt-10 mb-6"></div>
      <div className="ProS-Printer-Maintenance">
        <h3 className="mb-6">Maintenance</h3>
        <div className="ProS-Nickname-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer relative transition hover:brightness-125">
          <p className="text-[24px] font-normal">Screen Cleaning Mode</p>
        </div>
      </div>
      <div className="ProS-Printer-Line border-b-[1px] border-white w-full opacity-50 mt-10 mb-6"></div>
      <div className="ProS-Printer-Calibration">
        <h3 className="mb-6">Calibration</h3>
        <div className="ProS-Nickname-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer relative transition hover:brightness-125">
          <p className="text-[24px] font-normal">
            Dimensional Accuracy Benchmark
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProSPrinter;
