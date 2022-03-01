import { useState } from "react";
import { ChevronLeft } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proPrinterSettingsNavState } from "../../atoms/proPrinterSettingsNavAtom";

const ProPrinterLid = () => {
  const [switchOn, setSwitchOn] = useState(true);
  const [settingsScreen, setSettingsScreen] = useRecoilState(
    proPrinterSettingsNavState
  );

  console.log("settingsScreen", settingsScreen);

  return (
    <div className="ProPrinter-Lid">
      <div className="ProPrinter-Lid__header relative bg-[#333] text-white py-[20px] flex justify-center items-center text-[1.4rem] font-normal">
        <div
          className="ProPrinter-Lid__back absolute left-[2%] flex items-center text-white no-underline cursor-pointer"
          onClick={() => setSettingsScreen("settings")}
        >
          <ChevronLeft />
          <p className="ml-[10px] font-medium text-[1.1rem]">Back</p>
        </div>
        <h2>Lid Safety Sensor</h2>
      </div>
      <div className="ProPrinter-Lid__container h-full flex flex-col items-center">
        <div className="ProPrinter-Lid__switch w-[83%] flex items-center justify-between my-[35px] text-[18px] cursor-pointer">
          <h3 className="text-[1.3rem] font-bold">Lid Safety Sensor</h3>
          <div
            className={
              !switchOn
                ? `ProPrinter-Lid__onOff bg-[rgb(23,255,81)] h-full w-[100px] flex justify-end items-center rounded-[5px] p-[4px]`
                : `ProPrinter-Lid__off bg-[#333] h-full w-[100px] flex justify-start items-center rounded-[5px] p-[4px]`
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
        <div className="ProPrinter-Lid__details w-[83%] flex flex-col items-center">
          <p className="text-[18px] leading-6">
            The Lid Safety Sensor ensures that the printer has been properly
            cleaned between jobs, decreasing the chance of catastrophic tank
            famage or failure due to accidentally printing with parts already on
            the platform. This setting should be left on unless you are
            experiencing issues with the Lid Safety Sensor feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProPrinterLid;
