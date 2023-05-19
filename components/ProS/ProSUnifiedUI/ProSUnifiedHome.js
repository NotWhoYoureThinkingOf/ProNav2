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

export const ProSUnifiedHome = () => {
  const [screen, setScreen] = useRecoilState(proSScreenState);
  const [unifiedMenu, setUnifiedMenu] = useRecoilState(proSUnifiedNavState);
  const [unifiedUI, setUnifiedUI] = useRecoilState(proSUnifiedUIState);

  useEffect(() => {
    console.log(unifiedMenu);
  }, [unifiedMenu]);

  return (
    <div className="ProSUnifiedHome flex h-full">
      <div className="ProSUnifiedHomeNavBar">
        <ProSUnifiedNavBar />
      </div>
      <div className="ProSUnifiedHomeScreen w-full">
        {unifiedMenu === "unifiedPrint" && unifiedUI && <ProSUnifiedMain />}
        {unifiedMenu === "unifiedInformation" && unifiedUI && (
          <ProSUnifiedDeviceInfo />
        )}
        {unifiedMenu === "unifiedSettings" && unifiedUI && (
          <div>
            <ProSUnifiedSettings />
          </div>
        )}
        {unifiedMenu === "unifiedQueue" && unifiedUI && (
          <div>
            <ProSUnifiedQueue />
          </div>
        )}
        {unifiedMenu === "unifiedAccount" && unifiedUI && (
          <div>
            <ProSUnifiedAccount />
          </div>
        )}
      </div>
    </div>
  );
};
