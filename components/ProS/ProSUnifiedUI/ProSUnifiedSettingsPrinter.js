import React from "react";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedOption } from "./ProSUnifiedOption";

export const ProSUnifiedSettingsPrinter = () => {
  return (
    <div className="ProSUnifiedSettingsPrinter">
      <ProSUnifiedScreenHeader
        GoBack
        location={"unifiedSettings"}
        title={"Printer"}
      />
      <div className="PrinterContent flex flex-col gap-7 text-[26px] mt-4">
        <h4 className="font-bold">Maintenance</h4>
        <ProSUnifiedOption Enter title="Screen Cleaning Mode" />
        <h4 className="font-bold">Screen</h4>
        <ProSUnifiedOption Enter title="Brightness" />
      </div>
    </div>
  );
};
