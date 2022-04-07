import { Visibility } from "@material-ui/icons";
import React from "react";
import PC2ResinButton from "./PC2ResinButton";

const PC2Account = () => {
  return (
    <div className="ProCure2-Account">
      <div className="ProCure2-Account-Header flex items-center justify-center">
        <h3 className="text-[28px] font-semibold pb-4 -mt-1">
          SprintRay Account
        </h3>
      </div>
      <div className="ProCure2-Login-Message flex flex-col items-center">
        <p className="text-[24px] leading-[1.85rem]">
          Log into your SprintRay account.
        </p>
        <p className="text-[24px] leading-[1.85rem]">
          If you do not already have one
        </p>
        <p className="text-[24px] leading-[1.85rem]">
          or forgot your password please visit
        </p>
        <p className="text-[24px] leading-[1.85rem] font-semibold">
          https://dashboard.sprintray.com
        </p>
      </div>
      <div className="ProCure2-Account-Fields flex flex-col gap-5 mt-10 mb-6">
        <div className="ProCure2-Account-Email bg-white border-2 border-[#28B358] rounded-lg flex items-center justify-between px-4 h-[78px]">
          <input
            className="text-[#919B94] text-[24px] outline-none"
            placeholder="Email"
          />
        </div>
        <div className="ProCure2-Account-Password bg-white border-2 border-[#28B358] rounded-lg flex items-center justify-between px-4 h-[78px]">
          <input
            className="text-[#919B94] text-[24px] outline-none"
            placeholder="Password"
          />
          <Visibility style={{ fontSize: "2rem", color: "#919B94" }} />
        </div>
        <div className="h-[78px] bg-gradient-to-b from-[#2BC25F] to-[#1B7D3D] rounded-lg flex items-center justify-center cursor-pointer transition hover:brightness-125">
          <p className="text-[24px] font-semibold">Login</p>
        </div>
      </div>
      <div className="ProCure2-Account-Language border-t-[1px] border-[#CCCCCC] border-opacity-50 flex flex-col items-center">
        <h3 className="text-[28px] font-semibold mt-5 mb-6">System Language</h3>
        <div className="w-full">
          <PC2ResinButton resin="English" />
        </div>
      </div>
    </div>
  );
};

export default PC2Account;
