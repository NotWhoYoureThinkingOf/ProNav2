import React from "react";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedOption } from "./ProSUnifiedOption";
import { CheckCircle } from "@material-ui/icons";

export const ProSUnifiedAccount = () => {
  return (
    <div className="ProSUnifiedAccount flex flex-col">
      <ProSUnifiedScreenHeader title="SprintRay Account" />
      <div className="AccountOptions mt-3 flex flex-col gap-3"></div>
    </div>
  );
};
