import React from "react";
import { useRecoilState } from "recoil";
import { ProSUnifiedOption } from "./ProSUnifiedOption";
import { Wifi } from "@material-ui/icons";

export const ProSUnifiedLocal = () => {
  return (
    <div>
      <div className="InternetConnection mt-10 mb-12">
        <h4>Internet Connection</h4>
        <div className="InternetConnectionDetails text-[22px] mt-10 ml-2 flex flex-col gap-2">
          <div className="flex gap-3">
            <p className="opacity-[65%]">Status:</p>
            <p>Connected</p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-[65%]">Connection Type:</p>
            <p>Wi-Fi</p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-[65%]">IP Address:</p>
            <p>10.0.0.1</p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-[65%]">Subnet Mask:</p>
            <p>255.255.255.0</p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-[65%]">Device MAC Address:</p>
            <p>21:87:f3:54:67:05</p>
          </div>
        </div>
      </div>
      <div className="ConnectionType flex flex-col gap-6">
        <h4>Connection Type</h4>
        <div className="flex flex-col gap-2">
          <ProSUnifiedOption
            Enter
            LeftImage
            LocalImage
            image="/Lan.png"
            title="LAN"
            status="Not Connected"
          />
          <ProSUnifiedOption
            Enter
            LeftImage
            MaterialUI
            image={<Wifi style={{ fontSize: "2rem" }} />}
            title="Wireless"
            status="Connected"
          />
        </div>
      </div>
    </div>
  );
};
