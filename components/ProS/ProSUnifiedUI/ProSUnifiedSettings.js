import React from "react";
import { useRecoilState } from "recoil";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";
import { ProSUnifiedOption } from "./ProSUnifiedOption";
import { CheckCircle } from "@material-ui/icons";

export const ProSUnifiedSettings = () => {
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  return (
    <div className="ProSUnifiedSettings flex flex-col">
      <ProSUnifiedScreenHeader title="Settings" />
      <div className="SettingsOptions mt-3 flex flex-col gap-3">
        <div onClick={() => setUnifiedMenu("unifiedSettingsGeneral")}>
          <ProSUnifiedOption Enter title={"General"} />
        </div>
        <div onClick={() => setUnifiedMenu("unifiedSettingsSoftware")}>
          <ProSUnifiedOption Enter title={"Software"} />
        </div>
        <div onClick={() => setUnifiedMenu("unifiedSettingsPrinter")}>
          <ProSUnifiedOption Enter title={"Printer"} />
        </div>
        <div>
          <ProSUnifiedOption Enter title={"Connectivity"} />
        </div>
        <div>
          <ProSUnifiedOption Enter title={"Business Hours"} />
        </div>
      </div>
    </div>
  );
};
