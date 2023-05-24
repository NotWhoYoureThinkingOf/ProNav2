import React from "react";
import { useRecoilState } from "recoil";
import { proSConnectionState } from "../../../atoms/proSUnifiedConnectionState";
import { proSUnifiedBusinessHoursEnabledState } from "../../../atoms/proSUnifiedBusinessHoursEnabledState";

export const ProSUnifiedButtonToggle = ({
  leftText,
  rightText,
  height,
  fontSize,
  leftFunction,
  rightFunction,
  screen,
}) => {
  const [connection, setConnection] = useRecoilState(proSConnectionState);
  const [hoursEnabled, setHoursEnabled] = useRecoilState(
    proSUnifiedBusinessHoursEnabledState
  );
  return (
    <div
      className={`ProSUnifiedButtonToggle h-[${height}] flex justify-center`}
    >
      <div className="bg-[#191919] w-[700px] rounded-lg flex p-1">
        <div
          className={`ToggleLeft flex items-center justify-center flex-[.5] cursor-pointer rounded-md ${
            screen === "Connectivity" &&
            connection === "local" &&
            "bg-[#535455]"
          } ${screen === "BusinessHours" && hoursEnabled && "bg-[#535455]"}`}
          onClick={leftFunction}
        >
          <p
            className={`text-[${fontSize}] ${
              screen === "Connectivity" &&
              connection !== "local" &&
              "opacity-[38%]"
            } ${
              screen === "BusinessHours" && !hoursEnabled && "opacity-[38%]"
            }`}
          >
            {leftText}
          </p>
        </div>
        <div
          className={`ToggleRight flex items-center justify-center flex-[.5] cursor-pointer rounded-md ${
            screen === "Connectivity" &&
            connection === "hotspot" &&
            "bg-[#535455]"
          } ${screen === "BusinessHours" && !hoursEnabled && "bg-[#535455]"}`}
          onClick={rightFunction}
        >
          <p
            className={`text-[${fontSize}] ${
              screen === "Connectivity" &&
              connection !== "hotspot" &&
              `opacity-[38%]`
            } ${screen === "BusinessHours" && hoursEnabled && "opacity-[38%]"}`}
          >
            {rightText}
          </p>
        </div>
      </div>
    </div>
  );
};
