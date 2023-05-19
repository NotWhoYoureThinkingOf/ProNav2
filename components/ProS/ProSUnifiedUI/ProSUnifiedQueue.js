import React from "react";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedOption } from "./ProSUnifiedOption";
import { CheckCircle } from "@material-ui/icons";

export const ProSUnifiedQueue = () => {
  return (
    <div className="ProSUnifiedQueue flex flex-col">
      <ProSUnifiedScreenHeader title="Queue" />
      <div className="QueueOptions mt-3 flex flex-col gap-3"></div>
    </div>
  );
};
