import React from "react";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedSettingsGeneralAbout } from "./ProSUnifiedSettingsGeneralAbout";
import { ProSUnifiedOption } from "./ProSUnifiedOption";

export const ProSUnifiedSettingsGeneral = () => {
  return (
    <div className="ProSUnifiedSettingsGeneral">
      <ProSUnifiedScreenHeader
        GoBack
        location={"unifiedSettings"}
        title={"General"}
      />
      <div className="GeneralContent flex flex-col p-6 text-[24px] gap-10">
        <ProSUnifiedSettingsGeneralAbout />
        <div className="Nickname flex flex-col gap-6">
          <h4>Nickname</h4>
          <ProSUnifiedOption Enter title="Change Printer Nickname" />
        </div>
        <div className="System flex flex-col gap-6">
          <h4>System</h4>
          <ProSUnifiedOption Enter title="Language" status="English" />
        </div>
        <div className="Printer Maintenance flex flex-col gap-6">
          <h4>Printer Maintenance</h4>
          <ProSUnifiedOption Enter title="Reboot Printer" />
        </div>
      </div>
    </div>
  );
};
