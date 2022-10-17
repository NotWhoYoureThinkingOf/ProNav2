import {
  PersonOutline,
  Settings,
  SettingsOutlined,
  Wifi,
} from "@material-ui/icons";
import React from "react";
import ProSSettingsMenuOption from "./ProSSettingsMenuOption";
import { useRecoilState } from "recoil";
import { proSSettingsNavState } from "../../atoms/ProSSettingsNavAtom";
import ProSGeneral from "./ProSGeneral";
import ProSConnectivity from "./ProSConnectivity";
import ProSPrinter from "./ProSPrinter";

const ProSSettings = () => {
  const [settingsMenu, setSettingsMenu] = useRecoilState(proSSettingsNavState);

  return (
    <div className="ProS-Settings flex w-full h-full px-10">
      <div className="ProS-Settings-Container flex w-full h-full">
        <div className="ProS-Settings-Left flex-[.31] flex items-center w-full">
          <div className="ProS-Settings-Left-Container flex flex-col justify-between w-full h-full pt-[4.5rem] pb-32">
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
              Icon={<Wifi style={{ fontSize: "3rem" }} />}
              submenu="Connectivity"
            />
            <ProSSettingsMenuOption
              Icon={<PersonOutline style={{ fontSize: "3rem" }} />}
              submenu="Account"
            />
            <ProSSettingsMenuOption
              Icon={<Settings style={{ fontSize: "3rem" }} />}
              submenu="Software"
              Custom
              img="/Software.svg"
            />
          </div>
        </div>
        <div className="ProS-Settings-Right flex-[.69] overflow-y-scroll my-[3.25rem]">
          {settingsMenu === "General" && <ProSGeneral />}
          {settingsMenu === "Printer" && <ProSPrinter />}
          {settingsMenu === "Connectivity" && <ProSConnectivity />}
        </div>
      </div>
    </div>
  );
};

export default ProSSettings;
