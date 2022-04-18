import React from "react";

const ProSGeneral = () => {
  return (
    <div className="ProS-General">
      <div className="ProS-General-About">
        <h3 className="text-[30px] font-bold tracking-wide">About</h3>
        <ul>
          <li className="text-[24px]">Printer Model: PS9P</li>
          <li className="text-[24px]">Serial Number: PS9P0121300053</li>
          <li className="text-[24px]">IP Address: 10.0.0.194</li>
          <li className="text-[24px]">wireless MAC: 20:50:e7:39:16:00</li>
          <li className="text-[24px]">wired MAC: f6:c5:8a:a5:2c:90</li>
          <li className="text-[24px]">Nick Name: Pro S Printer</li>
        </ul>
        <div className="ProS-Nickname-Button bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] cursor-pointer transition hover:brightness-125">
          <p className="text-[24px] font-bold">Change Printer Nickname</p>
        </div>
      </div>
    </div>
  );
};

export default ProSGeneral;
