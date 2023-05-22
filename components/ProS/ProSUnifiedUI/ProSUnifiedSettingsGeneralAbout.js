import React from "react";

export const ProSUnifiedSettingsGeneralAbout = () => {
  return (
    <div className="AboutInfo flex flex-col gap-10">
      <h4>About</h4>
      <div className="AboutDetails flex flex-col px-2 gap-3">
        <div className="flex gap-2">
          <p className="opacity-[65%]">Printer Model: </p>
          <p>PS9P</p>
        </div>
        <div className="flex gap-2">
          <p className="opacity-[65%]">Serial Number: </p>
          <p>PS9P0121345678</p>
        </div>
        <div className="flex gap-2">
          <p className="opacity-[65%]">Tank Serial Number:</p>
          <p>BFEF1234567890</p>
        </div>
        <div className="flex gap-2">
          <p className="opacity-[65%]">IP Address:</p>
          <p>10.0.0.1</p>
        </div>
        <div className="flex gap-2">
          <p className="opacity-[65%]">Wireless MAC</p>
          <p>21:87:f3:74:69:11</p>
        </div>
        <div className="flex gap-2">
          <p className="opacity-[65%]">Wired MAC: </p>
          <p>2c:87:f3:d4:6b:05</p>
        </div>
        <div className="flex gap-2">
          <p className="opacity-[65%]">Nickname:</p>
          <p>Pro S</p>
        </div>
      </div>
    </div>
  );
};
