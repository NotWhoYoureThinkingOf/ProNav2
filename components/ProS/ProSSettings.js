import {
  PersonOutline,
  Settings,
  SettingsOutlined,
  Wifi,
  CalendarToday,
} from "@material-ui/icons";
import React from "react";
import ProSSettingsMenuOption from "./ProSSettingsMenuOption";
import { useRecoilState } from "recoil";
import { proSSettingsNavState } from "../../atoms/ProSSettingsNavAtom";
import ProSGeneral from "./ProSGeneral";
import ProSConnectivity from "./ProSConnectivity";
import ProSPrinter from "./ProSPrinter";
import { ProSSoftware } from "./ProSSoftware";
import { ProSAccount } from "./ProSAccount";

const ProSSettings = () => {
  const [settingsMenu, setSettingsMenu] = useRecoilState(proSSettingsNavState);

  return (
    <div className="ProS-Settings flex w-full h-full px-10">
      <div className="ProS-Settings-Container flex w-full h-full">
        <div className="ProS-Settings-Left flex-[.31] flex items-center w-full">
          <div className="ProS-Settings-Left-Container flex flex-col justify-between w-full h-full pt-[4rem] pb-[2rem] gap-y-8">
            <ProSSettingsMenuOption
              Icon={<SettingsOutlined style={{ fontSize: "3rem" }} />}
              submenu="General"
            />
            <ProSSettingsMenuOption
              Icon={<Settings style={{ fontSize: "3rem" }} />}
              submenu="Printer"
              Custom
              img="/Printer-Icon.svg"
            />
            <ProSSettingsMenuOption
              Icon={<Settings style={{ fontSize: "3rem" }} />}
              submenu="Software"
              Custom
              img="/Software.svg"
            />
            <ProSSettingsMenuOption
              Icon={<Wifi style={{ fontSize: "3rem" }} />}
              submenu="Connectivity"
            />
            <ProSSettingsMenuOption
              Icon={<CalendarToday style={{ fontSize: "2.5rem" }} />}
              submenu="Business Hours"
            />
            <ProSSettingsMenuOption
              Icon={<PersonOutline style={{ fontSize: "3rem" }} />}
              submenu="Account"
            />
          </div>
        </div>
        <div className="ProS-Settings-Right flex-[.69] overflow-y-scroll my-[4.25rem]">
          {settingsMenu === "General" && <ProSGeneral />}
          {settingsMenu === "Printer" && <ProSPrinter />}
          {settingsMenu === "Connectivity" && <ProSConnectivity />}
          {settingsMenu === "Software" && <ProSSoftware />}
          {settingsMenu === "Account" && <ProSAccount />}
        </div>
      </div>
    </div>
  );
};

export default ProSSettings;
