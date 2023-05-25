import React from "react";

export const ProSUnifiedHotspot = () => {
  return (
    <div className="ProSUnifiedHotspot flex flex-col pt-14">
      <p className="opacity-[65%] text-[22px] leading-[1.7rem]">
        Hotspot allows for direct connection to the printer through Wi-Fi
        without an intermediary wireless router. Enable this feature if you do
        not have a local Wi-Fi connection or if you are having problems
        connecting to your printer through your Wi-Fi network. While Hotspot is
        turned on, your printer will not be able to connect to another Wi-Fi
        network.
      </p>
      <div className="flex items-center pt-16 pb-4">
        <p className="w-[240px] text-[26px] opacity-[65%]">Hotspot Name:</p>
        <p className="text-[40px]">PS9P0121345678</p>
      </div>
      <div className="flex items-center">
        <p className="w-[240px] text-[26px] opacity-[65%]">Hotspot Password:</p>
        <p className="text-[40px]">sprintray</p>
      </div>
    </div>
  );
};
