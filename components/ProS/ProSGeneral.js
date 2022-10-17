import React from "react";

const ProSGeneral = () => {
  return (
    <div className="ProS-General px-3">
      <div className="ProS-General-About">
        <h3 className="text-[1.75rem] font-semibold tracking-wide">About</h3>
        <ul className="mt-4 mb-6">
          <li className="text-[24px]">Printer Model: PS9P</li>
          <li className="text-[24px]">Serial Number: PS9P0121300012</li>
          <li className="text-[24px]">IP Address: 10.0.0.123</li>
          <li className="text-[24px]">wireless MAC: 20:50:e7:39:16:12</li>
          <li className="text-[24px]">wired MAC: f6:c5:8a:a5:2c:12</li>
          <li className="text-[24px]">Nick Name: Pro S</li>
        </ul>
        <div className="ProS-Nickname-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer transition hover:brightness-125">
          <p className="text-[24px]">Change Printer Nickname</p>
        </div>
        <div className="ProS-Settings-Line border-b-[1px] border-white w-full opacity-50 mt-8 mb-6"></div>
        <div className="ProS-General-Language">
          <h3 className="text-[1.75rem] font-semibold tracking-wide mb-6">
            System Language
          </h3>
          <div className="ProS-Nickname-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer transition hover:brightness-125">
            <p className="text-[24px]">English</p>
          </div>
        </div>
        <div className="ProS-Settings-Line border-b-[1px] border-white w-full opacity-50 mt-8 mb-6"></div>
        <div className="ProS-General-Reboot">
          <h3 className="text-[1.75rem] font-semibold tracking-wide mt-12 mb-4">
            Reboot or Reset Printer
          </h3>
          <div className="ProS-General-Reboot-Buttons flex flex-col gap-4">
            <div className="ProS-Nickname-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer transition hover:brightness-125">
              <p className="text-[24px]">Reboot Printer</p>
            </div>
            <div className="ProS-Nickname-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer transition hover:brightness-125">
              <p className="text-[24px]">Clear Print History</p>
            </div>
            <div className="ProS-Nickname-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer transition hover:brightness-125">
              <p className="text-[24px]">Clear Queued Print Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProSGeneral;
