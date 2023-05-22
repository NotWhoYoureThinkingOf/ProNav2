import { AccessAlarm, CloudQueue, Opacity } from "@material-ui/icons";
import React from "react";
import { ProSUnifiedButton } from "./ProSUnifiedButton";

export const ProSUnifiedPrintJob = ({
  title,
  date,
  time,
  resin,
  printTime,
  thickness,
  RWC,
  email,
}) => {
  return (
    <div className="ProSUnifiedPrintJob bg-[#191919] rounded-md h-[340px] flex flex-col p-5 gap-4 cursor-pointer hover:brightness-125">
      <div className="UnifiedPrintJobTop flex font-light items-center">
        <img src="/ProSPrintImage.png" alt="" />
        <div
          className={`UnifiedPrintJobInfo flex flex-col px-6 ${
            RWC ? "gap-4" : "gap-4 mb-4"
          }`}
        >
          <div className="UnifiedPrintJobInfoRow1 flex items-center gap-4">
            <h4 className="text-[26px]">{title}</h4>
            <p className="text-[22px] opacity-[38%]">{`${date} • ${time}`}</p>
          </div>
          <div className="UnifiedPrintJobInfoRow2 flex items-center opacity-[80%] text-[24px] gap-5">
            <div className="flex items-center gap-2">
              <Opacity style={{ fontSize: "2rem" }} />
              <p>{resin}</p>
            </div>
            <div className="flex items-center gap-2">
              <AccessAlarm style={{ fontSize: "2rem" }} />
              <p>{printTime}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/thickness.png" alt="" style={{ fontSize: "2rem" }} />
              <p>{thickness} µm</p>
            </div>
          </div>
          {RWC ? (
            <div className="UnifiedPrintJobInfoRow3 flex text-[24px] gap-5">
              <div className="flex opacity-[65%] items-center gap-2">
                <CloudQueue style={{ fontSize: "2rem" }} />
                <p>RayWare Cloud</p>
              </div>
              <p className="opacity-[38%]">{email}</p>
            </div>
          ) : (
            <div className="h-[29px]"> </div>
          )}
        </div>
      </div>
      <div className="UnifiedPrintJobBottom flex gap-2">
        <ProSUnifiedButton text="PATIENT LIST" />
        <ProSUnifiedButton text="PRINT" />
      </div>
    </div>
  );
};
