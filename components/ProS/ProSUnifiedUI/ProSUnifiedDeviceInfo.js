import React from "react";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedOption } from "./ProSUnifiedOption";
import { CheckCircle } from "@material-ui/icons";

export const ProSUnifiedDeviceInfo = () => {
  return (
    <div className="ProSUnifiedDeviceInfo flex flex-col">
      <ProSUnifiedScreenHeader
        GoBack
        location={"unifiedPrint"}
        title={"Device Status"}
      />
      <div className="DeviceInfoOptions mt-3 flex flex-col gap-3">
        <div>
          <ProSUnifiedOption Enter title={"Resin"} status={"NightGuard Flex"} />
        </div>
        <div>
          <ProSUnifiedOption Enter title={"Resin Tank"} status={"Healthy"} />
        </div>
        <div>
          <ProSUnifiedOption
            Enter
            title={"Build Platform"}
            status={
              <CheckCircle style={{ color: "#66AA22", fontSize: "2rem" }} />
            }
          />
        </div>
      </div>
    </div>
  );
};
