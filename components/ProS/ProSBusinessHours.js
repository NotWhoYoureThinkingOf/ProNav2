import React, { useState } from "react";
import { ProSBusinessToggles } from "./ProSBusinessToggles";
import { useRecoilState } from "recoil";
import { proSNavState } from "../../atoms/proSNavAtom";

export const ProSBusinessHours = () => {
  const [disabled, setDisabled] = useState(true);
  const [monday, setMonday] = useState(false);
  const [menu, setMenu] = useRecoilState(proSNavState);
  return (
    <div className="ProS-Business-Hours-Screen px-3">
      <div className="ProS-Business-Hours">
        <div className="ProS-Business-Hours-Top">
          <h3 className="text-[1.75rem] font-semibold tracking-wide">
            Ready When You Are
          </h3>
          <div className="ProS-Business-Hours-Description mt-8 flex flex-col gap-8">
            <p className="text-[24px]">
              Set your schedule so Pro S is always ready to print when you need
              it
              <br />
              and conserves power when you don't.
            </p>
            <p className="text-[24px]">
              During business hours, Pro S will continuously heat the resin tank
              and
              <br />
              build platform. Outside of business hours, it will sleep to save
              power.
            </p>
          </div>
          <div
            className="ProS-Business-Hours-Sleep-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 mt-[4.5rem] rounded-lg tracking-[.02em] cursor-pointer transition hover:brightness-125"
            onClick={() => setMenu("sleeping")}
          >
            <p className="text-[24px]">Sleep Now</p>
          </div>
        </div>
      </div>
      <div className="ProS-Business-Hours-Bottom mt-[4rem]">
        <h3 className="text-[1.75rem] font-semibold tracking-wide">
          Set Business Hours
        </h3>
        <div className="ProS-Enable-Toggle bg-[#6B6A6A] flex w-full p-2 text-[1.5rem] rounded-lg mt-6">
          <div
            className={`ProS-Enable-Toggle-Left flex-[.5] text-center rounded-lg cursor-pointer py-2 ${
              disabled && "bg-[#1B7D3D]"
            }`}
            onClick={() => setDisabled(true)}
          >
            Disable Schedule
          </div>
          <div
            className={`ProS-Enable-Toggle-Left flex-[.5] text-center rounded-lg py-2 cursor-pointer ${
              !disabled && "bg-[#1B7D3D]"
            }`}
            onClick={() => setDisabled(false)}
          >
            Enable Schedule
          </div>
        </div>
        {!disabled && (
          <div className="ProS-Business-Hours-Schedule mt-32">
            <ProSBusinessToggles />
          </div>
        )}
      </div>
    </div>
  );
};
