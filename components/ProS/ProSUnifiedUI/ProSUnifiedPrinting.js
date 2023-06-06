import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedBottomButton } from "./ProSUnifiedBottomButton";
import { WaterDropOutlined } from "@mui/icons-material";
import { AccessAlarm } from "@material-ui/icons";
import gsap from "gsap/dist/gsap";

export const ProSUnifiedPrinting = () => {
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  const [layerCount, setLayerCount] = useState(1);
  const [maxLayer, setMaxLayer] = useState(3);
  const [printing, setPrinting] = useState(false);
  const [printComplete, setPrintComplete] = useState(false);
  const totalProgress = useRef(null);

  useEffect(() => {
    gsap.to(totalProgress.current, {
      x: "0",
      delay: 3,
      duration: 15,
      ease: "none",
      onStart: () => setPrinting(true),
      onComplete: () => {
        if (layerCount < maxLayer) {
          setTimeout(() => {
            setLayerCount(layerCount + 1);
            gsap.fromTo(
              totalProgress.current,
              { x: "-100%" },
              {
                x: "0",
                delay: 0.5,
                duration: 15,
                ease: "none",
              }
            );
          }, 3000);
        } else {
          setTimeout(() => setPrintComplete(true), 1000);
          setTimeout(() => setUnifiedMenu("unifiedPrintComplete"), 3000);
        }
      },
    });
  }, [layerCount]);

  return (
    <div className="ProSUnifiedPrinting h-full">
      <ProSUnifiedScreenHeader title="Print Job Name" />
      <div className="PrintingContent pt-10 pl-6 h-[710px]">
        <div className="PrintingInfo flex gap-12">
          <div className="PrintingInfoLeft">
            <img src="/UnifiedUI/ProS/print-job-image.png" />
          </div>
          <div className="PrintingInfoRight flex flex-col gap-8">
            <h3 className="text-[48px]" style={{ fontWeight: "400" }}>
              Print Job Name
            </h3>
            <div
              className="PrintingInfoDetails
            flex flex-col gap-5 leading-7"
            >
              <div
                className="PrintingResin proSPrintingTextStyle"
                style={{ fontWeight: "300" }}
              >
                <WaterDropOutlined style={{ fontSize: "2rem" }} />
                <p className="max-w-[212px]">SprintRay NightGuard Flex</p>
              </div>
              <div
                className="PrintingTime proSPrintingTextStyle"
                style={{ fontWeight: "300" }}
              >
                <AccessAlarm style={{ fontSize: "2rem" }} />
                <p>2h 36m</p>
              </div>
              <div
                className="PrintingThickness proSPrintingTextStyle translate-x-1 translate-y-1"
                style={{ fontWeight: "300" }}
              >
                <img src="/thickness.png" />
                <p className="translate-x-1">100 µm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="PrintingProgress flex flex-col gap-3 pt-12 pb-[11.5rem]">
          <div className="PrintingLayerCount flex h-[26px] text-[22px]">
            <p>
              Layer {layerCount}/{maxLayer} (Still being developed)
            </p>
          </div>
          <div className="PrintingLayerProgress bg-[#191919] h-[10px] rounded-3xl relative overflow-hidden">
            <div
              className="absolute h-full w-full bg-[#cc0033] rounded-md -translate-x-full"
              ref={totalProgress}
            ></div>
          </div>
          <div className="PrintingTotalProgress bg-[#191919] h-[80px] rounded-md flex justify-start items-center relative overflow-hidden">
            {!printing ? (
              <p className="text-[40px] px-6 z-50">Initializing...</p>
            ) : (
              <p className="text-[40px] px-6 z-50 translate-x-[43.5rem]">
                2h 36m remaining
              </p>
            )}
            <div
              className={`absolute h-full w-full bg-[#cc0033] rounded-md ${
                layerCount === 0 && "!translate-x-[-100%]"
              } ${layerCount === 1 && "!translate-x-[-100%]"} ${
                layerCount === 2 && "!translate-x-[-66%]"
              } ${layerCount === 3 && "!translate-x-[-33%]"}
              ${
                layerCount === maxLayer && printComplete && "!translate-x-[0%]"
              }`}
            ></div>
          </div>
        </div>
        <div className="PrintingButtons flex gap-[.6rem]">
          <div className="PrintingCancel relative flex-[.33]">
            <ProSUnifiedBottomButton text="Cancel" />
          </div>
          <div className="PrintingViewLayer relative flex-[.33]">
            <ProSUnifiedBottomButton text="View Layer" />
          </div>
          <div className="PrintingPause relative flex-[.33]">
            <ProSUnifiedBottomButton text="Pause" />
          </div>
        </div>
      </div>
    </div>
  );
};
