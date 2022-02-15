import Link from "next/link";
import {
  ChevronRight,
  Settings,
  Wifi,
  WifiTethering,
  VpnKey,
} from "@material-ui/icons";
import ProPrinterSettingOption from "./ProPrinterSettingOption";

const ProPrinterSettings = () => {
  return (
    <div className=" text-white">
      <div className="py-[35px] px-[60px]">
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
              className="flex items-center justify-between py-5 border-b-[1px] border-white border-opacity-10"
              // style={{ padding: !local && "20px 0 0" }}
            >
              <div className="flex items-center justify-between w-full">
                <h4 className="text-[1.2rem] font-bold">Connection</h4>
                <div className="flex items-center gap-[2px]">
                  <h5
                    // onClick={() => setLocal(true)}
                    className="hoverBtn"
                  >
                    Local Network
                  </h5>
                  <h5
                    // onClick={() => setLocal(false)}
                    className="hoverBtn"
                  >
                    Printer Hotspot
                  </h5>
                </div>
              </div>

              {/* {!local && (
                <div className="p95Main__hotspotDetails">
                  <p>
                    Hotspot allows for direct connection to the printer through
                    Wi-Fi without an intermediary wireless router. Enable this
                    feature if you do not have a local Wi-Fi connection or if
                    you are having problems connection to your printer through
                    your Wi-Fi network. While Hotspot is turned on, your printer
                    will not be able to connect to a Wi-Fi network.
                  </p>
                  <div className="p95Main__hotspotInfo">
                    <div className="p95Main__hotspotName">
                      <WifiTethering />
                      <p className="hotspotName">Hotspot Name</p>
                      <p className="hotspotSN">P95-12A3B45C</p>
                    </div>
                    <div className="p95Main__hotspotPassword">
                      <VpnKey />
                      <p className="hotspotPassword">Hotspot Password</p>
                      <p className="hotspotPW">sprintray</p>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
            <div className="flex items-center justify-between py-4 border-b-[1px] border-white border-opacity-10">
              <h4 className="text-[1.2rem] font-bold">Connection Profile</h4>
              <div className="p95Main__settingOption flex items-center gap-[2px]">
                <h5
                  // onClick={() => setWireless(true)}
                  className="hoverBtn"
                >
                  Wireless
                </h5>
                <h5
                  // onClick={() => setWireless(false)}
                  className="hoverBtn"
                >
                  Wired
                </h5>
              </div>
            </div>
            <Link href="/" className="p95Main__setting">
              <a className="flex items-center justify-between py-5 border-b-[1px] border-white border-opacity-10">
                <h4 className="text-[1.2rem] font-bold">Network</h4>
                <div
                  href="/p95/wifi-networks"
                  className="p95Main__settingOption flex items-center gap-[2px]"
                >
                  <h4 className="text-[1.2rem] font-bold">No WiFi Selected</h4>
                  <ChevronRight />
                </div>
              </a>
            </Link>
            <ProPrinterSettingOption
              title="SprintRay Dashboard Login"
              selectedOption="Customer Name"
              Icon={<ChevronRight />}
            />
          </div>
        </div>
      </div>
      <div className="text-white px-[60px]">
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
        <ProPrinterSettingOption title="About" Icon={<ChevronRight />} />
        <ProPrinterSettingOption
          title="System Language"
          selectedOption="English"
          Icon={<ChevronRight />}
        />
        <ProPrinterSettingOption
          title="Lid Safety Sensor"
          selectedOption="On"
          Icon={<ChevronRight />}
        />
        <ProPrinterSettingOption
          title="Tank Heating Always On"
          selectedOption="On"
          Icon={<ChevronRight />}
        />
        <ProPrinterSettingOption
          title="Reinforced Supports (Beta)"
          selectedOption="Off"
          Icon={<ChevronRight />}
        />
        <ProPrinterSettingOption
          title="Grayscale (Beta)"
          selectedOption="Off"
          Icon={<ChevronRight />}
        />
        <ProPrinterSettingOption
          title="Reboot Printer"
          Icon={<ChevronRight />}
        />
      </div>
    </div>
  );
};

export default ProPrinterSettings;
