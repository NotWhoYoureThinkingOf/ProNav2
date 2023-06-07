import React from "react";
import { useRecoilState } from "recoil";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ThumbDown, ThumbUp } from "@material-ui/icons";
import { ProSUnifiedBottomMultiButton } from "./ProSUnifiedBottomMultiButton";

export const ProSUnifiedPrintComplete = () => {
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  return (
    <div className="ProSUnifiedPrintComplete h-full">
      <ProSUnifiedScreenHeader title="Print Job Name" />
      <div className="CompleteContent pt-10 pl-6 h-[710px] flex flex-col">
        <div className="CompleteText flex flex-col items-center flex-1 justify-center pb-44">
          <h3 className="text-[40px]" style={{ fontWeight: 600 }}>
            Print Job Finished
          </h3>
          <p className="text-[24px] opacity-[65%]" style={{ fontWeight: 300 }}>
            Are you satisfied with the results of this print job?
          </p>
        </div>
        <div className="CompleteButtons flex gap-[.6rem]">
          <div className="PrintingCancel relative flex-[.33]">
            <ProSUnifiedBottomMultiButton
              Icon
              img={<ThumbDown style={{ fontSize: "1.8rem" }} />}
              bg="#EE6622"
            />
          </div>
          <div
            className="PrintingViewLayer relative flex-[.33]"
            onClick={() => setUnifiedMenu("unifiedPrint")}
          >
            <ProSUnifiedBottomMultiButton
              Text
              text="HOME"
              textSize="24px"
              bg="#303132"
            />
          </div>
          <div className="PrintingPause relative flex-[.33]">
            <ProSUnifiedBottomMultiButton
              Icon
              img={<ThumbUp style={{ fontSize: "1.8rem" }} />}
              bg="#66AA22"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
