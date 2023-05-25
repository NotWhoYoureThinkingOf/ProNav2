import React from "react";
import { useRecoilState } from "recoil";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedOption } from "./ProSUnifiedOption";
import { Wifi } from "@material-ui/icons";
import { ProSUnifiedButtonToggle } from "./ProSUnifiedButtonToggle";
import { proSConnectionState } from "../../../atoms/proSUnifiedConnectionState";
import { ProSUnifiedLocal } from "./ProSUnifiedLocal";
import { ProSUnifiedHotspot } from "./ProSUnifiedHotspot";

export const ProSUnifiedConnectivity = () => {
  const [connection, setConnection] = useRecoilState(proSConnectionState);
  return (
    <div className="ProSUnifiedConnectivity">
      <ProSUnifiedScreenHeader
        GoBack
        location={"unifiedSettings"}
        title={"Network"}
      />
      <div className="ConnectivityContent flex flex-col text-[26px]">
        <div className="ConnectivityToggle">
          <ProSUnifiedButtonToggle
            leftText="Local Network"
            rightText="Printer Hotspot"
            leftFunction={() => setConnection("local")}
            rightFunction={() => setConnection("hotspot")}
            screen="Connectivity"
            height="80px"
          />
        </div>
        {connection === "local" && <ProSUnifiedLocal />}
        {connection === "hotspot" && <ProSUnifiedHotspot />}
      </div>
    </div>
  );
};
