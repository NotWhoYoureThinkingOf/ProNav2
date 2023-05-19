import React from "react";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedOption } from "./ProSUnifiedOption";
import { CheckCircle } from "@material-ui/icons";

export const ProSUnifiedSettings = () => {
  return (
    <div className="ProSUnifiedSettings flex flex-col">
      <ProSUnifiedScreenHeader title="Settings" />
      <div className="SettingsOptions mt-3 flex flex-col gap-3">
        <div>
          <ProSUnifiedOption Enter title={"General"} />
        </div>
        <div>
          <ProSUnifiedOption Enter title={"Software"} />
        </div>
        <div>
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
