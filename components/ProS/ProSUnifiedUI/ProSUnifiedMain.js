import { CheckCircle, Opacity, Wifi } from "@material-ui/icons";
import React from "react";
import { ProSUnifiedBottomButton } from "./ProSUnifiedBottomButton";

export const ProSUnifiedMain = () => {
  return (
    <div className="ProSUnifiedMain flex flex-col items-center h-full pt-4 relative">
      <h3 className="text-[28px]">
        Pro S <span className="opacity-[65%]">&nbsp;PS9P0121478960</span>
      </h3>
      <div className="absolute top-4 right-2">
        <Wifi
          style={{ objectFit: "contain", height: "2.5rem", width: "2.5rem" }}
        />
      </div>
      <div className="ProSUnifiedMain-Content flex w-full h-full gap-3 pt-[6rem]">
        <div className="ProSUnifiedMain-Left flex-[.5] relative flex flex-col">
          <div className="flex items-center">
            <CheckCircle
              style={{ width: "50px", height: "50px", color: "#66AA22" }}
            />
            <h2 className="text-[48px] font-semibold tracking-[.5px] ml-3">
              Ready to Print
            </h2>
          </div>
          <div className="ProSUnifiedMain-LeftText mt-[2rem]">
            <p className="opacity-[65%] w-[524px] text-[26px]">
              You can send a print job from RayWare, select from the queue, or
              insert a USB drive to get started.
            </p>
          </div>
          <div className="ProSUnifiedMain-TankDetails flex flex-col opacity-[65%] text-[26px] gap-4 mt-[4rem]">
            <div className="flex items-center gap-3">
              <Opacity style={{ width: "2rem", height: "2rem" }} />
              <p>NightGuard Flex</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/Union.png"
                style={{ width: "2rem", height: "2rem", objectFit: "contain" }}
              />
              <p>Healthy</p>
            </div>
          </div>
          <ProSUnifiedBottomButton text="CHECK STATUS" />
        </div>
        <div className="ProSUnifiedMain-Right flex-[.5] flex w-full relative">
          <div className="">
            <img
              src="/Printer A.png"
              alt=""
              style={{
                objectFit: "contain",
                paddingBottom: "8rem",
                marginLeft: "10rem",
              }}
            />
          </div>
          <ProSUnifiedBottomButton text="CHANGE RESIN" />
        </div>
      </div>
    </div>
  );
};
