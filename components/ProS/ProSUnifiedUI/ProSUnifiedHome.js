import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { proSScreenState } from "../../../atoms/proSScreenAtom";
import { proSSelectedResin } from "../../../atoms/proSSelectedResinAtom";
import { proSUnifiedUIState } from "../../../atoms/proSUnfiedUIState";
import { ProSUnifiedNavBar } from "./ProSUnifiedNavBar";
import { ProSUnifiedMain } from "./ProSUnifiedMain";
import { proSUnifiedNavState } from "../../../atoms/proSUnifiedNavAtom";
import { ProSUnifiedDeviceInfo } from "./ProSUnifiedDeviceInfo";
import { ProSUnifiedSettings } from "./ProSUnifiedSettings";
import { ProSUnifiedQueue } from "./ProSUnifiedQueue";
import { ProSUnifiedAccount } from "./ProSUnifiedAccount";
import { ProSUnifiedSettingsGeneral } from "./ProSUnifiedSettingsGeneral";
import { ProSUnifiedSettingsSoftware } from "./ProSUnifiedSettingsSoftware";
import { ProSUnifiedSettingsPrinter } from "./ProSUnifiedSettingsPrinter";
import { ProSUnifiedConnectivity } from "./ProSUnifiedConnectivity";
import { ProSUnifiedBusinessHours } from "./ProSUnifiedBusinessHours";
import { ProSUnifiedReadiness } from "./ProSUnifiedReadiness";

export const ProSUnifiedHome = () => {
  const [screen, setScreen] = useRecoilState(proSScreenState);
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  const [unifiedUI, setUnifiedUI] = useRecoilState(proSUnifiedUIState);

  useEffect(() => {
    console.log(unifiedMenu);
  }, [unifiedMenu]);

  return (
    <div className="ProSUnifiedHome flex h-full">
      <div className="ProSUnifiedHomeNavBar overflow-y-scroll">
        <ProSUnifiedNavBar />
      </div>
      <div className="ProSUnifiedHomeScreen w-full overflow-y-scroll">
        {/* Home */}
        {unifiedMenu === "unifiedPrint" && unifiedUI && <ProSUnifiedMain />}

        {/* Device Status */}
        {unifiedMenu === "unifiedInformation" && unifiedUI && (
          <ProSUnifiedDeviceInfo />
        )}

        {/* Printing */}
        {unifiedMenu === "unifiedReadiness" && unifiedUI && (
          <ProSUnifiedReadiness />
        )}

        {/* Settings - Start */}
        {unifiedMenu === "unifiedSettings" && unifiedUI && (
          <div>
            <ProSUnifiedSettings />
          </div>
        )}
        {unifiedMenu === "unifiedSettingsGeneral" && unifiedUI && (
          <div>
            <ProSUnifiedSettingsGeneral />
          </div>
        )}
        {unifiedMenu === "unifiedSettingsSoftware" && unifiedUI && (
          <div>
            <ProSUnifiedSettingsSoftware />
          </div>
        )}
        {unifiedMenu === "unifiedSettingsPrinter" && unifiedUI && (
          <div>
            <ProSUnifiedSettingsPrinter />
          </div>
        )}
        {unifiedMenu === "unifiedSettingsBusinessHours" && unifiedUI && (
          <div>
            <ProSUnifiedBusinessHours />
          </div>
        )}
        {/* Settings - Connectivity */}
        {unifiedMenu === "unifiedSettingsConnectivity" && unifiedUI && (
          <div>
            <ProSUnifiedConnectivity />
          </div>
        )}
        {/* Settings - End */}

        {/* Queue */}
        {unifiedMenu === "unifiedQueue" && unifiedUI && (
          <div>
            <ProSUnifiedQueue />
          </div>
        )}

        {/* Account */}
        {unifiedMenu === "unifiedAccount" && unifiedUI && (
          <div>
            <ProSUnifiedAccount />
          </div>
        )}
      </div>
    </div>
  );
};
