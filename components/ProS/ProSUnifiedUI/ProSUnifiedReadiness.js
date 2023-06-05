import React from "react";
import { useRecoilState } from "recoil";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";
import { ProSUnifiedBottomButton } from "./ProSUnifiedBottomButton";

export const ProSUnifiedReadiness = () => {
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  return (
    <div className="ProSUnifiedReadiness relative h-full">
      <ProSUnifiedScreenHeader title="Print Readiness" />
      <div className="ReadinessContent flex h-[650px] items-start pt-12">
        <div className="ReadinessLeft flex flex-col items-center gap-8 flex-[.47.5] mt-5 relative">
          <img src="/Printer A.png" alt="" />
          <div className="flex items-center opacity-[65%] text-[26px] gap-2">
            <img
              src="/Union.png"
              alt=""
              style={{ width: "2rem", height: "2rem", objectFit: "contain" }}
            />
            <p>Healthy</p>
          </div>
          <div className="ReadinessLeft1 proSReadinessTextStyle absolute text-[22px] top-[11px] left-[285px]">
            1
          </div>
          <div className="ReadinessLeft2 proSReadinessTextStyle absolute text-[22px] bottom-[245px] left-[145px]">
            2
          </div>
          <div className="ReadinessLeft3 proSReadinessTextStyle absolute text-[22px] bottom-[215px]">
            3
          </div>
        </div>
        <div className="ReadinessRight flex flex-col flex-[.52.5] gap-11 leading-8">
          <div className="flex readiness-1 gap-5 text-[26px]">
            <div className="w-[40px]">
              <p className="readiness-1-number proSReadinessTextStyle">1</p>
            </div>
            <div className="readiness-1-text flex flex-col gap-4 mt-1">
              <h4 className="text-[40px]">Lock Platform</h4>
              <p className="opacity-[65%] max-w-[24rem]">
                Push away from you to lock it in place. You will hear a click
                when the resin tank is properly locked.
              </p>
            </div>
          </div>
          <div className="flex readiness-2 gap-5 text-[26px]">
            <div className="w-[40px]">
              <p className="readiness-2-number proSReadinessTextStyle">2</p>
            </div>
            <div className="readiness-1-text flex flex-col gap-4 mt-1">
              <h4 className="text-[40px]">Check Resin</h4>
              <p className="opacity-[65%] max-w-[24rem]">
                If there is no resin assigned to this tank, you will be guided
                through the resin type selection.{" "}
              </p>
            </div>
          </div>
          <div className="flex readiness-3 gap-5 text-[26px]">
            <div className="w-[40px]">
              <p className="readiness-3-number proSReadinessTextStyle">3</p>
            </div>
            <div className="readiness-1-text flex flex-col gap-4 mt-1">
              <h4 className="text-[40px]">Align Resin Tank</h4>
              <p className="opacity-[65%] max-w-[23rem]">
                Align resin tank with tank cradle, place it and slide it into
                the tracks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="" onClick={() => setUnifiedMenu("unifiedWarming")}>
        <ProSUnifiedBottomButton text="START PRINTING" />
      </div>
    </div>
  );
};
