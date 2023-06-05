import React from "react";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedBottomButton } from "./ProSUnifiedBottomButton";
import { WaterDropOutlined } from "@mui/icons-material";
import { AccessAlarm } from "@material-ui/icons";

export const ProSUnifiedPrinting = () => {
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
            <p>Layer 1/156</p>
          </div>
          <div className="PrintingLayerProgress bg-[#191919] h-[10px] rounded-3xl"></div>
          <div className="PrintingTotalProgress bg-[#191919] h-[80px] rounded-md flex justify-start items-center">
            <p className="text-[40px] px-6">Initializing...</p>
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
