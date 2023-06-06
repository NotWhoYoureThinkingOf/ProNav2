import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";
import { ProSUnifiedBottomButton } from "./ProSUnifiedBottomButton";
import { ProSWarmingComponent } from "./ProSWarmingComponent";
import { useState } from "react";

export const ProSUnifiedWarming = () => {
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  const [temp, setTemp] = useState(27);

  useEffect(() => {
    const tempIncrease = setInterval(() => setTemp(temp + 1), 5000);
    if (temp < 30) {
      tempIncrease;
    } else {
      setTemp(30);
      setTimeout(() => setUnifiedMenu("unifiedPrinting"), 1000);
    }

    return () => {
      clearInterval(tempIncrease);
    };
  }, [temp]);

  return (
    <div className="ProSUnifiedWarming relative h-full">
      <ProSUnifiedScreenHeader title="Print Job Name" />
      <div className="WarmingContent flex items-start h-[650px] pt-[3rem] px-10">
        <div className="WarmingLeft flex flex-col gap-8 flex-[0.65]">
          <div className="WarmingText flex flex-col gap-4">
            <h4 className="text-[40px]">Warming Up</h4>
            <p
              className="text-[26px] opacity-[70%] w-[32rem] leading-8"
              style={{ fontWeight: 300 }}
            >
              This may take a few minutes depending on the ambient temperature.{" "}
            </p>
          </div>
          <div className="WarmingBoxes flex flex-col gap-6 text-[26px]">
            <ProSWarmingComponent
              image="/UnifiedUI/ProS/warming-platform.png"
              currentTemp={30}
              targetTemp={30}
            />
            <ProSWarmingComponent
              image="/UnifiedUI/ProS/warming-tank.png"
              currentTemp={temp}
              targetTemp={30}
            />
          </div>
          <div className="WarmingWarning flex gap-6">
            <img
              src="/UnifiedUI/ProS/warming-warning.png"
              style={{ objectFit: "contain" }}
            />
            <p className="text-[22px] text-[#EE6622] w-[24rem] pt-2">
              The build platform may lower during this process to stir resin.{" "}
            </p>
          </div>
        </div>
        <div className="WarmingRight flex-[0.35] pt-4">
          <img src="/UnifiedUI/ProS/warming-printer.png" />
        </div>
      </div>
      <div className="" onClick={() => setUnifiedMenu("unifiedPrint")}>
        <ProSUnifiedBottomButton text="CANCEL PRINT" />
      </div>
    </div>
  );
};
