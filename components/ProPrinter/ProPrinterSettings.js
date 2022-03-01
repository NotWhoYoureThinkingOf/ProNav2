import {
  ChevronRight,
  Settings,
  Wifi,
  WifiTethering,
  VpnKey,
} from "@material-ui/icons";
import ProPrinterSettingOption from "./ProPrinterSettingOption";
import { useRecoilState } from "recoil";
import { proPrinterSettingsNavState } from "../../atoms/proPrinterSettingsNavAtom";
import { proPrinterNetworkNameState } from "../../atoms/proPrinterNetworkName";
import ProPrinterAbout from "./ProPrinterAbout";
import ProPrinterLanguage from "./ProPrinterLanguage";
import ProPrinterLid from "./ProPrinterLid";
import ProPrinterTankHeating from "./ProPrinterTankHeating";
import ProPrinterReboot from "./ProPrinterReboot";
import { useState } from "react";
import ProPrinterHotspotDetails from "./ProPrinterHotspotDetails";
import ProPrinterNetworks from "./ProPrinterNetworks";

const ProPrinterSettings = () => {
  const [settingsScreen, setSettingsScreen] = useRecoilState(
    proPrinterSettingsNavState
  );
  const [networkName, setNetworkName] = useRecoilState(
    proPrinterNetworkNameState
  );

  const [local, setLocal] = useState(true);

  const [wireless, setWireless] = useState(true);

  console.log("settingsScreen", settingsScreen);

  return (
    <div className="p95-Settings h-full text-white">
      {settingsScreen === "settings" && (
        <div className="p95-Settings-Container">
          <div className="p95-Settings-Top py-[35px] px-[60px]">
            <div className="p95Main__connectivity">
              {/* {customer !== "" && (
            <div className="p95Main__update">
              <div className="p95Main__updateContent">
                <div className="p95Main__updateLeft">
                  <GetApp />
                  <h3>Software Update</h3>
                </div>
                <div className="p95Main__updateRight">
                  <h5>Check for Updates</h5>
                </div>
              </div>

              <hr />
            </div>
          )} */}
              <div className="flex items-center gap-[10px]">
                <Wifi style={{ fontSize: "2.2rem", color: "lightblue" }} />
                <h3 className="text-[1.7rem] font-bold">Connectivity</h3>
              </div>
              <div className="p95Main__connectivityOptions">
                <div
                  className="flex flex-col items-center justify-between py-4 border-b-[1px] border-white border-opacity-10"
                  // style={{ padding: !local && "20px 0 0" }}
                >
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-[1.2rem]">Connection</h4>
                    <div className="flex items-center gap-[2px]">
                      <h5
                        onClick={() => setLocal(true)}
                        className={`hoverBtn ${local && "bg-[#444]"}`}
                      >
                        Local Network
                      </h5>
                      <h5
                        onClick={() => setLocal(false)}
                        className={`hoverBtn ${!local && "bg-[#444]"}`}
                      >
                        Printer Hotspot
                      </h5>
                    </div>
                  </div>

                  {!local && <ProPrinterHotspotDetails />}
                </div>
                <div className="flex items-center justify-between py-4 border-b-[1px] border-white border-opacity-10">
                  <h4 className="text-[1.2rem]">Connection Profile</h4>
                  <div className="p95Main__settingOption flex items-center gap-[2px]">
                    <h5
                      onClick={() => setWireless(true)}
                      className={`hoverBtn ${wireless && "bg-[#444]"}`}
                    >
                      Wireless
                    </h5>
                    <h5
                      onClick={() => setWireless(false)}
                      className={`hoverBtn ${!wireless && "bg-[#444]"}`}
                    >
                      Wired
                    </h5>
                  </div>
                </div>
                <div
                  className="p95Main__setting flex items-center justify-between py-5 border-b-[1px] border-white border-opacity-10 cursor-pointer"
                  onClick={() => setSettingsScreen("networks")}
                >
                  <h4 className="text-[1.2rem]">Network</h4>
                  <div
                    href="/p95/wifi-networks"
                    className="p95Main__settingOption flex items-center gap-4"
                  >
                    <h4 className="text-[1.2rem] font-bold">{networkName}</h4>
                    <ChevronRight />
                  </div>
                </div>
                <ProPrinterSettingOption
                  title="SprintRay Dashboard Login"
                  selectedOption="Customer Name"
                  Icon={<ChevronRight />}
                />
              </div>
            </div>
          </div>
          <div className="p95-Settings-Bottom text-white px-[60px]">
            <div className="flex items-center gap-[10px]">
              <Settings
                style={{
                  backgroundColor: "#5cd85c",
                  fill: "black",
                  borderRadius: "2px",
                }}
              />
              <h3 className="text-[1.7rem] font-bold">General</h3>
            </div>
            <div className="" onClick={() => setSettingsScreen("about")}>
              <ProPrinterSettingOption title="About" Icon={<ChevronRight />} />
            </div>
            <div className="" onClick={() => setSettingsScreen("language")}>
              <ProPrinterSettingOption
                title="System Language"
                selectedOption="English"
                Icon={<ChevronRight />}
              />
            </div>
            <div className="" onClick={() => setSettingsScreen("lid")}>
              <ProPrinterSettingOption
                title="Lid Safety Sensor"
                selectedOption="On"
                Icon={<ChevronRight />}
              />
            </div>
            <div className="" onClick={() => setSettingsScreen("heating")}>
              <ProPrinterSettingOption
                title="Tank Heating Always On"
                selectedOption="On"
                Icon={<ChevronRight />}
              />
            </div>
            <div className="" onClick={() => setSettingsScreen("reboot")}>
              <ProPrinterSettingOption
                title="Reboot Printer"
                Icon={<ChevronRight />}
              />
            </div>
          </div>
        </div>
      )}

      {settingsScreen === "about" && <ProPrinterAbout />}
      {settingsScreen === "language" && <ProPrinterLanguage />}
      {settingsScreen === "lid" && <ProPrinterLid />}
      {settingsScreen === "heating" && <ProPrinterTankHeating />}
      {settingsScreen === "reboot" && <ProPrinterReboot />}
      {settingsScreen === "networks" && <ProPrinterNetworks />}
    </div>
  );
};

export default ProPrinterSettings;
