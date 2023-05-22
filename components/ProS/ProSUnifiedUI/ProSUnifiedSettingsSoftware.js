import React from "react";
import { useRecoilState } from "recoil";
import { proSUnifiedAutomaticUpdatesState } from "../../../atoms/proSUnifiedAutomaticUpdatesState";
import { ProSUnifiedScreenHeader } from "./ProSUnifiedScreenHeader";
import { ProSUnifiedButton } from "./ProSUnifiedButton";
import { ProSUnifiedButtonRounded } from "./ProSUnifiedButtonRounded";

export const ProSUnifiedSettingsSoftware = () => {
  const [autoUpdate, setAutoUpdate] = useRecoilState(
    proSUnifiedAutomaticUpdatesState
  );
  return (
    <div className="ProSUnifiedSettingsSoftware">
      <ProSUnifiedScreenHeader
        GoBack
        location={"unifiedSettings"}
        title={"Software"}
      />
      <div className="SoftwareContent flex flex-col text-[26px] mt-6">
        <div className="AutomaticUpdates flex items-center justify-between">
          <div className="AutomaticUpdatesLeft flex flex-col">
            <h4>Automatic Updates</h4>
            <p className="text-[22px] opacity-[65%]">
              Software updates will never install during printing operations.
            </p>
          </div>
          <div className="AutomaticUpdatesRight">
            <div
              className="AutomaticUpdatesToggle h-[80px] w-[290px] rounded-md flex bg-[#191919] cursor-pointer"
              onClick={() => setAutoUpdate(!autoUpdate)}
            >
              <p
                className={`flex-[0.5] flex justify-center items-center rounded-md opacity-[60%] select-none ${
                  autoUpdate &&
                  "bg-white text-[#66AA22] opacity-100 font-semibold"
                }`}
              >
                On
              </p>
              <p
                className={`flex-[0.5] flex justify-center items-center rounded-md opacity-[60%] select-none ${
                  !autoUpdate &&
                  "bg-white text-[#66AA22] opacity-100 font-semibold"
                }`}
              >
                Off
              </p>
            </div>
          </div>
        </div>
        <div className="SoftwareVersionSection flex flex-col mt-12">
          <h4 className="SoftwareVersionTitle font-bold">Software</h4>
          <div className="SoftwareVersionInfo flex flex-col py-6 text-[22px]">
            <div className="SoftwareVersionDetails flex w-full">
              <div className="SoftwareVersionLeft flex flex-col flex-[0.5]">
                <h5 className="opacity-[65%]">Software Version</h5>
                <p>8.0.2.11</p>
              </div>
              <div className="SoftwareVersionRight flex flex-col flex-[0.5]">
                <h5 className="opacity-[65%]">Firmware Version</h5>
                <p>3.1.10</p>
              </div>
            </div>
            <div className="SoftwareVersionCheck bg-[#191919] flex flex-col items-center rounded-xl pt-8 p-6 mt-4 gap-8">
              <div className="SoftwareVersionCheckTop flex gap-3">
                <p className="opacity-[65%]">Last Checked</p>
                <p>Today at 5:18 PM</p>
              </div>
              <div className="SoftwareVersionCheckTopBottom flex w-full gap-2">
                <div className="flex-[0.5]">
                  <ProSUnifiedButtonRounded text="Check for updates" />
                </div>
                <div className="flex-[0.5]">
                  <ProSUnifiedButtonRounded text="Release Notes" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="SoftwareMaterialsSection flex flex-col mt-12">
          <h4 className="SoftwareMaterialsTitle font-bold">Materials</h4>
          <div className="SoftwareMaterialsInfo flex flex-col py-6 text-[22px]">
            <div className="SoftwareMaterialsDetails flex w-full">
              <div className="SoftwareMaterialsDescription flex flex-col">
                <p className="opacity-[65%]">
                  Materials are periodically updated and synced with Pro S
                </p>
              </div>
            </div>
            <div className="SoftwareMaterialsCheck bg-[#191919] flex flex-col items-center rounded-xl pt-8 p-6 mt-6 gap-8">
              <div className="SoftwareMaterialsCheckTop flex gap-3">
                <p className="opacity-[65%]">Last Checked</p>
                <p>Today at 5:18 PM</p>
              </div>
              <div className="SoftwareMaterialsCheckTopBottom flex w-full gap-2">
                <div className="flex-1">
                  <ProSUnifiedButtonRounded text="Update Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
