import React, { useState } from "react";

const ProSConnectivity = () => {
  const [local, setLocal] = useState(true);
  const [wireless, setWireless] = useState(true);
  const [IP, setIP] = useState(true);

  return (
    <div className="ProS-Connectivity px-3">
      <div className="ProS-Connectivity-Connection">
        <h3 className="text-[1.75rem] font-semibold tracking-wide">
          Connection
        </h3>
        <div className="ProS-Local-Toggle bg-[#6B6A6A] flex w-full p-2 text-[1.5rem] rounded-lg mt-4">
          <div
            className={`ProS-Local-Toggle-Left flex-[.5] text-center rounded-lg cursor-pointer py-2 ${
              local && "bg-[#1B7D3D]"
            }`}
            onClick={() => setLocal(true)}
          >
            Local Network
          </div>
          <div
            className={`ProS-Local-Toggle-Left flex-[.5] text-center rounded-lg py-2 cursor-pointer ${
              !local && "bg-[#1B7D3D]"
            }`}
            onClick={() => setLocal(false)}
          >
            Printer Hotspot
          </div>
        </div>
        <div className="ProS-Connectivity-Line border-b-[1px] border-white w-full opacity-50 mt-8 mb-6"></div>

        {local && (
          <div className="">
            <div className="ProS-Connectivity-Profile">
              <h3 className="text-[1.75rem] font-semibold tracking-wide mb-6">
                Connection Profile
              </h3>
              <div className="ProS-Local-Toggle bg-[#6B6A6A] flex w-full p-2 text-[1.5rem] rounded-lg mt-4">
                <div
                  className={`ProS-Local-Toggle-Left flex-[.5] text-center rounded-lg cursor-pointer py-2 ${
                    wireless && "bg-[#1B7D3D]"
                  }`}
                  onClick={() => setWireless(true)}
                >
                  Wireless
                </div>
                <div
                  className={`ProS-Local-Toggle-Left flex-[.5] text-center rounded-lg py-2 cursor-pointer ${
                    !wireless && "bg-[#1B7D3D]"
                  }`}
                  onClick={() => setWireless(false)}
                >
                  Wired
                </div>
              </div>
            </div>
            <div className="ProS-Connectivity-Line border-b-[1px] border-white w-full opacity-50 mt-8 mb-6"></div>
            <div className="ProS-Connectivity-LocalSelected">
              <div className="ProS-Connectivity-Network">
                <h3 className="text-[1.75rem] font-semibold tracking-wide mt-6">
                  Network
                </h3>
                <h3 className="text-[1.5rem] font-semibold mb-3">
                  Network SSID:{" "}
                  <span className="font-normal">Dental Office Wifi</span>
                </h3>
                <div className="ProS-Connectivity-Reboot-Buttons flex flex-col gap-4">
                  <div className="ProS-Nickname-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center py-5 rounded-lg tracking-[.02em] cursor-pointer transition hover:brightness-125">
                    <p className="text-[24px]">Forget this Network</p>
                  </div>
                </div>
              </div>
              <div className="ProS-Connectivity-Line border-b-[1px] border-white w-full opacity-50 mt-8 mb-6"></div>
              <div className="ProS-Connectivity-IP">
                <h3 className="text-[1.75rem] font-semibold tracking-wide mt-6 mb-2">
                  Internet Protocol
                </h3>
                <h3 className="text-[1.5rem] font-semibold">
                  Printer IP Address:{" "}
                  <span className="font-normal">10.0.0.123</span>
                </h3>
                <h3 className="text-[1.5rem] font-semibold">
                  Subnet Mask:{" "}
                  <span className="font-normal">123.123.123.0</span>
                </h3>
                <h3 className="text-[1.5rem] font-semibold">
                  Router: <span className="font-normal">10.0.0.123</span>
                </h3>
                <h3 className="text-[1.75rem] font-semibold tracking-wide mt-6">
                  Configure IP
                </h3>
              </div>
              <div className="ProS-IP-Toggle bg-[#6B6A6A] flex w-full p-2 text-[1.5rem] rounded-lg mt-4">
                <div
                  className={`ProS-Local-Toggle-Left flex-[.5] text-center rounded-lg cursor-pointer py-2 ${
                    IP && "bg-[#1B7D3D]"
                  }`}
                  onClick={() => setIP(true)}
                >
                  Automatic
                </div>
                <div
                  className={`ProS-Local-Toggle-Left flex-[.5] text-center rounded-lg py-2 cursor-pointer ${
                    !IP && "bg-[#1B7D3D]"
                  }`}
                  onClick={() => setIP(false)}
                >
                  Manual
                </div>
              </div>
            </div>
          </div>
        )}
        {!local && (
          <div className="">
            <p className="text-[1.35rem] opacity-50 mb-2 tracking-wide">
              Hotspot allows for direct connection to the printer through Wi-Fi
              without an intermediary wireless router. Enable this feature if
              you do not have a local Wi-Fi connection or if you are having
              problems connecting to your printer through your Wi-Fi network.
              While Hotspot is turned on, your printer will not be able to
              connect to a Wi-Fi network.
            </p>
            <h3 className="text-[1.75rem] font-semibold tracking-wide">
              Hotspot Name: <span className="font-normal">PS9P0121300123</span>
            </h3>
            <h3 className="text-[1.75rem] font-semibold tracking-wide">
              Hotspot Password: <span className="font-normal">sprintray</span>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProSConnectivity;
