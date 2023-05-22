import React from "react";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedPrintJob } from "./ProSUnifiedPrintJob";

export const ProSUnifiedQueue = () => {
  return (
    <div className="ProSUnifiedQueue flex flex-col">
      <ProSUnifiedScreenHeader title="Queue" Edit />
      <div className="QueueJobs mt-3 flex flex-col gap-3">
        <ProSUnifiedPrintJob
          title="Patient 1 NightGuard"
          date="05/22"
          time="12:47pm"
          resin="SprintRay NightGuard Flex"
          printTime="1h 14m"
          thickness="100"
        />
        <ProSUnifiedPrintJob
          RWC
          title="Patient 2 Retainer"
          date="05/22"
          time="12:47pm"
          resin="SprintRay Die & Model 2 Gray"
          printTime="36m"
          thickness="100"
          email="user@dentaloffice.com"
        />
        <ProSUnifiedPrintJob
          title="Patient 3 Aligner"
          date="05/21"
          time="1:39pm"
          resin="KeyStone KeySplint Soft"
          printTime="54m"
          thickness="50"
          email="user@dentaloffice.com"
        />
      </div>
    </div>
  );
};
