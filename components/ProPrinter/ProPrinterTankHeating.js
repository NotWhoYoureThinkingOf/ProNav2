import { useState } from "react";
import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proPrinterSettingsNavState } from "../../atoms/proPrinterSettingsNavAtom";

const ProPrinterTankHeating = () => {
  const [switchOn, setSwitchOn] = useState(true);
  const [settingsScreen, setSettingsScreen] = useRecoilState(
    proPrinterSettingsNavState
  );

  console.log("settingsScreen", settingsScreen);

  return (
    <div className="ProPrinter-TankHeating">
      <div className="ProPrinter-TankHeating__header relative bg-[#333] text-white py-[20px] flex justify-center items-center text-[1.4rem] font-normal">
        <div
          className="ProPrinter-TankHeating__back absolute left-[2%] flex items-center text-white no-underline cursor-pointer"
          onClick={() => setSettingsScreen("settings")}
        >
          <ChevronLeft />
          <p className="ml-[10px] font-medium text-[1.1rem]">Back</p>
        </div>
        <h2>Lid Safety Sensor</h2>
      </div>
      <div className="ProPrinter-TankHeating__container h-full flex flex-col items-center">
        <div className="ProPrinter-TankHeating__switch w-[83%] flex items-center justify-between my-[35px] text-[18px] cursor-pointer">
          <h3 className="text-[1.3rem] font-bold">Resin Tank Heating</h3>
          <div
            className={
              !switchOn
                ? `ProPrinter-TankHeating__onOff bg-[rgb(23,255,81)] h-full w-[100px] flex justify-end items-center rounded-[5px] p-[4px]`
                : `ProPrinter-TankHeating__off bg-[#333] h-full w-[100px] flex justify-start items-center rounded-[5px] p-[4px]`
            }
            onClick={() => setSwitchOn(!switchOn)}
          >
            {switchOn ? (
              <p className="py-[5px] px-[8px] text-[#333] bg-white rounded-[5px] select-none">
                OFF
              </p>
            ) : (
              <p className="py-[5px] px-[8px] bg-white text-[rgb(23,255,81)] rounded-[5px] select-none">
                ON
              </p>
            )}
          </div>
        </div>
        <div className="ProPrinter-TankHeating__details w-[83%] flex flex-col items-start gap-4">
          <p className="text-[18px] leading-6">
            Resin Tank Heating ensures that each material reaches its peak
            operating temperature before the print begins. When enabled, Pro
            will run a heating program when printing with certain materials or
            when the ambient temperature is too low. This setting should be left
            on unless you are experiencing issues with the Resin Tank Heating
            feature.
          </p>
          <p className="text-[18px] leading-6">
            If you would like to reduce heating times, move Pro to a warmer
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProPrinterTankHeating;
